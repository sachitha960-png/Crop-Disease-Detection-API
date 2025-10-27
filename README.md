🌾 Crop Disease Detection Web App
🤖 Machine Learning | ☁️ Google Cloud Vertex AI | ⚡ FastAPI | 💻 HTML + JS Frontend
🧠 Project Overview

This project identifies crop leaf diseases using a Machine Learning image classification model deployed on Google Cloud Vertex AI.
The system integrates FastAPI as the backend service and a modern, responsive web interface built with HTML, CSS, and JavaScript for user interaction.

The application allows farmers and researchers to upload leaf images and get real-time disease predictions with high accuracy and confidence levels.
It leverages Google Cloud Pub/Sub for event-driven communication and Vertex AI Prediction Service for scalable, production-ready inference.


🏗️ System Architecture

+-----------------------------------+
|        🌿 Web Frontend            |
|  (HTML, CSS, JavaScript)          |
|  - User uploads leaf image        |
|  - Displays prediction results    |
+------------------+----------------+
                   |
                   v
+-----------------------------------+
|        ⚡ FastAPI Backend          |
|  - Receives image from frontend   |
|  - Publishes to Pub/Sub topic     |
|  - Calls Vertex AI endpoint       |
|  - Returns disease prediction     |
+------------------+----------------+
                   |
                   v
+-----------------------------------+
|     ☁️ Google Cloud Vertex AI      |
|  - Deployed ML Model              |
|  - Performs image classification  |
|  - Returns confidence scores      |
+-----------------------------------+


📊 Data Flow Diagram

[User Uploads Image] 
        ↓
[FastAPI Backend] → Publishes Image → [Google Pub/Sub Topic]
        ↓
[Vertex AI Endpoint] → Returns Predictions
        ↓
[Frontend UI Displays Disease Name + Confidence]


🚀 Features

✅ Deployed AutoML Image Classification model on Google Cloud Vertex AI
✅ Real-time prediction via FastAPI backend
✅ Lightweight and responsive frontend built with HTML, CSS, JS
✅ Uses Google Pub/Sub for event-driven data flow
✅ Dockerized backend for cloud deployment (Google Cloud Run ready)
✅ Secure handling of API calls using service account authentication
✅ High model performance — PR AUC: 0.995, Log Loss: 0.02,
Precision: 99.67%, Recall: 99.01%


🧩 Tech Stack

👉Frontend-HTML, CSS, JavaScript
👉Backend-FastAPI, Uvicorn
👉ML Platform-Google Cloud Vertex AI
👉Cloud Services-Google Pub/Sub, Cloud Storage
👉Containerization-Docker
👉Language-Python 3.13
👉Version Control-Git + GitHub


⚙️ Setup & Installation

1️⃣ Clone this repository

git clone https://github.com/sachitha960-png/Crop-Disease-Detection-API.git
cd Crop-Disease-Detection-API


2️⃣ Create a virtual environment

python -m venv venv
venv\Scripts\activate    # For Windows
# OR
source venv/bin/activate # For Mac/Linux


3️⃣ Install dependencies

pip install -r backend/requirements.txt


4️⃣ Run the backend locally

cd backend
uvicorn main:app --reload


5️⃣ Run the frontend
Open frontend/index.html in your browser or use a local server (VS Code Live Server).

✅ The app will be available at:
👉 http://localhost:8501
 (if using a local server)
👉 Or through your hosted frontend (e.g., Netlify)


🧾 Sample Prediction Output
{
  "disease_name": "Tomato Late Blight",
  "confidence": 99.32
}


✅ If confidence ≥ 90% → “High confidence prediction”
⚠️ If confidence < 90% → “Low confidence – consider retesting”


📈 Model Performance (Vertex AI Metrics)
Metric	Value
PR AUC	0.995
Log Loss	0.02
Precision (0.5 threshold)	99.67%
Recall (0.5 threshold)	99.01%


☁️ Deployment Workflow

🧩 Google Cloud Run → Host FastAPI backend (Docker container)
🖼️ Netlify or GitHub Pages → Serve frontend
📤 Vertex AI Prediction API → Handles image inference
🔁 Google Pub/Sub → Publishes and processes uploaded data


🗂️ Folder Structure
crop-disease-webapp/
│
├── backend/
│   ├── main.py              # FastAPI backend service
│   ├── requirements.txt     # Backend dependencies
│   ├── Dockerfile           # Cloud Run deployment config
│   └── (credentials.json)   # (excluded from Git)
│
├── frontend/
│   ├── index.html           # User interface
│   ├── style.css            # Styling for UI
│   └── script.js            # JS logic and API integration
│
└── .gitignore               # Ignore credentials, venv, cache


🧑‍💻 Author

Sachitha Ravichandran
📧 sachitha.ravichandran@gmail.com
🎓 Department of Computer Science and Engineering, 🏫 SRM Institute of Science and Technology


🌍 GitHub: https://github.com/sachitha960-png/Crop-Disease-Detection-API


🪄 Acknowledgements

Google Cloud Vertex AI
FastAPI Framework
Netlify for frontend hosting
AutoML Vision for model training