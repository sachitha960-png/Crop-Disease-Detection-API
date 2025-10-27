from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import pubsub_v1
import base64
import requests
import json
import logging
import os
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://crop-disease.netlify.app/"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)

PROJECT_ID = "ace-axon-475607-s9"
PUBSUB_TOPIC = "crop-images-topic"
VERTEX_ENDPOINT = "https://2869222871681466368.us-central1-46543744271.prediction.vertexai.goog/v1/projects/46543744271/locations/us-central1/endpoints/2869222871681466368:predict"

# Use default credentials in Cloud Run
pubsub_client = pubsub_v1.PublisherClient()

@app.get("/")
def home():
    return {"message": "Crop Disease Detection API is running!"}

@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    try:
        image_data = await image.read()
        base64_image = base64.b64encode(image_data).decode("utf-8")

        topic_path = pubsub_client.topic_path(PROJECT_ID, PUBSUB_TOPIC)
        pubsub_client.publish(topic_path, data=json.dumps({"image": base64_image}).encode("utf-8"))
        logging.info("Image published to Pub/Sub")

        token_request = requests.post(
            "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token",
            headers={"Metadata-Flavor": "Google"}
        )
        token = token_request.json().get("access_token")

        payload = {"instances": [{"image": base64_image}]}
        headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

        response = requests.post(VERTEX_ENDPOINT, headers=headers, data=json.dumps(payload))
        response.raise_for_status()

        result = response.json()
        prediction = result["predictions"][0]
        disease_name = prediction.get("disease_name", "Unknown")
        confidence = prediction.get("confidence", 0.0) * 100

        return {"disease_name": disease_name, "confidence": confidence}

    except requests.exceptions.RequestException as e:
        logging.error(f"Vertex AI error: {e}")
        raise HTTPException(status_code=500, detail="Prediction service unavailable")
    except Exception as e:
        logging.error(f"General error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run("main:app", host="0.0.0.0", port=port)
