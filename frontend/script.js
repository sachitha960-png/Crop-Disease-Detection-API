const backendURL = "https://crop-disease-service-46543744271.us-central1.run.app/predict";

const imageInput = document.getElementById("imageInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultDiv = document.getElementById("result");
const predictionEl = document.getElementById("prediction");
const confidenceEl = document.getElementById("confidence");
const previewImage = document.getElementById("previewImage");

let selectedFile = null;

// handle file upload
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  selectedFile = file;
  const imgURL = URL.createObjectURL(file);
  previewImage.src = imgURL;
  resultDiv.classList.add("hidden");
  analyzeBtn.disabled = false;
});

// handle analyze button click
analyzeBtn.addEventListener("click", async () => {
  if (!selectedFile) {
    alert("Please upload an image first!");
    return;
  }

  analyzeBtn.disabled = true;
  predictionEl.textContent = "Analyzing...";
  confidenceEl.textContent = "";
  resultDiv.classList.remove("hidden");

  const formData = new FormData();
  formData.append("file", selectedFile);

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
      predictionEl.textContent = `Prediction: ${label}`;
      confidenceEl.textContent = `Confidence: ${confidence}%`;
    } else {
      predictionEl.textContent = "❌ Unable to get prediction";
      confidenceEl.textContent = "";
    }
  } catch (err) {
    predictionEl.textContent = "⚠️ Error connecting to backend!";
    confidenceEl.textContent = "";
    console.error(err);
  } finally {
    analyzeBtn.disabled = false;
  }
});
