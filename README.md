🌾 Crop Disease Detection Web App
🤖 Machine Learning | ☁️ Google Cloud Vertex AI | ⚡ FastAPI | 💻 HTML + JS Frontend
🧠 Project Overview
This project identifies crop leaf diseases using a Machine Learning image classification model deployed on Google Cloud Vertex AI.

The system integrates FastAPI as the backend service and a modern, responsive web interface built with HTML, CSS, and JavaScript for user interaction.

The application allows farmers and researchers to upload leaf images and get real-time disease predictions with high accuracy and confidence levels.

It leverages Google Cloud Pub/Sub for event-driven communication and Vertex AI Prediction Service for scalable, production-ready inference.

🏗️ System Architecture
          ┌──────────────────────────────┐
          │        🌿 Web Frontend        │
          │  (HTML, CSS, JavaScript)      │
          │------------------------------│
          │  • User uploads leaf image    │
          │  • Displays prediction result │
          └──────────────┬───────────────┘
                         │
                         ▼
          ┌──────────────────────────────┐
          │        ⚡ FastAPI Backend      │
          │------------------------------│
          │  • Receives image from UI     │
          │  • Publishes to Pub/Sub topic │
          │  • Sends request to Vertex AI │
          │  • Returns prediction result  │
          └──────────────┬───────────────┘
                         │
                         ▼
          ┌──────────────────────────────┐
          │     ☁️ Google Cloud Vertex AI  │
          │------------------------------│
          │  • Deployed ML Model          │
          │  • Performs classification    │
          │  • Returns confidence scores  │
          └──────────────────────────────┘
🚀 Features
✅ Deployed AutoML Image Classification model on Google Cloud Vertex AI
✅ Real-time prediction via FastAPI backend
✅ Lightweight and responsive frontend (HTML, CSS, JS)
✅ Uses Google Pub/Sub for event-driven data flow
✅ Dockerized backend (Cloud Run ready)
✅ Secure handling of API authentication
✅ High model performance:

PR AUC: 0.995
Log Loss: 0.02
Precision: 99.67%
Recall: 99.01%
🧩 Tech Stack
Component	Technology Used
Frontend	HTML, CSS, JavaScript
Backend	FastAPI, Uvicorn
ML Platform	Google Cloud Vertex AI
Cloud Services	Google Pub/Sub, Cloud Storage
Containerization	Docker
Language	Python 3.13
Version Control	Git + GitHub
⚙️ Setup & Installation
**1️⃣ Clone this repository**
```bash
git clone https://github.com/sachitha960-png/Crop-Disease-Detection-API.git
cd Crop-Disease-Detection-API

2️⃣ Create a virtual environment
python -m venv venv
venv\Scripts\activate    # For Windows
# OR
source venv/bin/activate # For Mac/Linux

3️⃣ Install dependencies
pip install -r backend/requirements.txt

5️⃣ Run the frontend
Open frontend/index.html in your browser or use a local server (like VS Code Live Server).
🧾 Sample Prediction Output

{ "disease_name": "Tomato Late Blight", "confidence": 99.32 }

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

🖼️ Netlify / GitHub Pages → Host frontend

📤 Vertex AI Prediction API → Handles inference

🔁 Google Pub/Sub → Publishes uploaded data

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

🎓 Department of Computer Science and Engineering

🏫 SRM Institute of Science and Technology

📧 sachitha.ravichandran@gmail.com