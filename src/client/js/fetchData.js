function fetchData(url, formText) {
  fetch(url)
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

export { fetchData };
