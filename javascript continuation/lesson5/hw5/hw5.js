const parseData = JSON.parse(data);
console.log(parseData);
const contentEl = document.querySelector(".content");
parseData.forEach((item) => {
  contentEl.insertAdjacentHTML(
    "beforeend",
    `<h2>${item.bpi.USD.code}</h2>
    <p>${item.bpi.USD.description}</p>
    <h2>${item.bpi.GBP.code}</h2>
    <p>${item.bpi.GBP.description}</p>
    <h2>${item.bpi.EUR.code}</h2>
    <p>${item.bpi.EUR.description}</p>
    <p>${item.time.updated}</p>`
  );
});
