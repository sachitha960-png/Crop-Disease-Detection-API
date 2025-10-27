const backendURL = "https://crop-disease-service-46543744271.us-central1.run.app/predict";

const imageInput = document.getElementById("imageInput");
const predictBtn = document.getElementById("predictBtn");
const resultDiv = document.getElementById("result");
const predictionText = document.getElementById("predictionText");
const uploadSection = document.getElementById("uploadSection");

// Show preview of uploaded image
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  const oldPreview = document.getElementById("previewImage");
  if (oldPreview) oldPreview.remove();

  const img = document.createElement("img");
  img.id = "previewImage";
  img.src = URL.createObjectURL(file);
  img.className = "mt-4 max-h-48 rounded-xl";
  uploadSection.appendChild(img);
});

// Predict disease
predictBtn.addEventListener("click", async () => {
  const file = imageInput.files[0];
  if (!file) {
    alert("Please upload an image first!");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  predictionText.innerText = "⏳ Predicting...";
  resultDiv.classList.remove("hidden");

  try {
    const response = await fetch(backendURL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Response:", data);

    if (data && data.predictions) {
      const label = data.predictions[0].displayNames[0];
      const confidence = (data.predictions[0].confidences[0] * 100).toFixed(2);
      predictionText.innerHTML = `🌱 <strong>${label}</strong> <br> Confidence: ${confidence}%`;
    } else {
      predictionText.innerText = "❌ Unable to get prediction. Check console for details.";
    }
  } catch (error) {
    predictionText.innerText = "⚠️ Error connecting to backend!";
    console.error(error);
  }
});

