(function() {
  const apiURL ="https://fastaivisionapp01.azurewebsites.net/api/classify";
  
  const fileInput = document.getElementById("file-input");
  const analyzeButton = document.getElementById("analyze-button");
  const selectButton = document.getElementById("select-button");
  const uploadLabel = document.getElementById("upload-label");
  const resultLabel = document.getElementById("result-label");
  const imgDiv = document.getElementById("image-picked");

  selectButton.addEventListener("click", showPicker, false);
  analyzeButton.addEventListener("click", analyze, false);
  fileInput.addEventListener("change", showPicked, false);

  function showPicker() {
    fileInput.click();
  }

  function showPicked() {
    uploadLabel.innerHTML = this.files[0].name;

    const options = { maxHeight: 200, orientation: true };
    loadImage(this.files[0], replaceImg, options);
  }

  function replaceImg(img) {
    while (imgDiv.firstChild) {
      imgDiv.removeChild(imgDiv.lastChild);
    }

    imgDiv.appendChild(img);
  }

  function analyze() {
    const uploadFiles = fileInput.files;
    if (uploadFiles.length !== 1) {
      window.alert("Please select a file to analyze!");
      return;
    }
    
    analyzeButton.disabled = true;
    analyzeButton.innerHTML = "Analyzing...";

    const xhr = new XMLHttpRequest();

    xhr.onerror = function() {
      window.alert(this.responseText);
      analyzeButton.innerHTML = "Analyze";
      analyzeButton.disabled = false;
    };

    xhr.onload = function(e) {
      if (this.readyState === 4) {
        // State 4 == DONE
        const response = JSON.parse(e.target.responseText);
        resultLabel.innerHTML = `Result = ${response.result}`;
        analyzeButton.innerHTML = "Analyze";
        analyzeButton.disabled = false;
      }
    };

    xhr.open("POST", apiURL);
    xhr.send(uploadFiles[0]);
  }
})();
