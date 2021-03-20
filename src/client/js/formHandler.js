function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  // Client.checkForName(formText);

  console.log("formText", formText);

  console.log("::: Form Submitted :::");

  const apiKeyUrl = "http://localhost:8081/key";

  Client.fetchData(apiKeyUrl, formText);
}

export { handleSubmit };
