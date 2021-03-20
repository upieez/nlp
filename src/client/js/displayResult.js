function displayResult(result) {
  document.getElementById(
    "results"
  ).innerHTML = `Agreement: ${result.agreement} <br /> Confidence: ${result.confidence} <br /> Irony: ${result.irony} <br /> Subjectivity: ${result.subjectivity}`;
}

export { displayResult };
