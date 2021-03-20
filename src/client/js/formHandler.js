function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  // Client.checkForName(formText);

  console.log("formText", formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/key")
    .then((res) => res.json())
    .then(function (res) {
      const query = `?key=${res.key}&lang=en&url=${formText}`;
      fetch(`https://api.meaningcloud.com/sentiment-2.1${query}`, {
        method: "POST",
        mode: "cors",
        headers: {},
      }).then(async (data) => {
        const result = await data.json();
        console.log("what is", result);
        Client.displayResult(result);
      });
    });
}

export { handleSubmit };
