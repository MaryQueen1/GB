const parseData = JSON.parse(data);
console.log(parseData);
const contentEl = document.querySelector(".content");
parseData.forEach((item) => {
  contentEl.insertAdjacentHTML(
    "beforeend",
    `<h2>${item.bpi.USD.code}</h2>
    <img src="${item.bpi.USD.img}" alt="USD Image">
    <p>${item.bpi.USD.description}</p>
    <h2>${item.bpi.GBP.code}</h2>
    <img src="${item.bpi.GBP.img}" alt="USD Image">
    <p>${item.bpi.GBP.description}</p>
    <h2>${item.bpi.EUR.code}</h2>
    <img src="${item.bpi.EUR.img}" alt="USD Image">
    <p>${item.bpi.EUR.description}</p>
    <p>${item.time.updated}</p>`
  );
});
const body = document.querySelector("body");
body.insertAdjacentHTML(
  "afterbegin",
  `
    <style>
    img {width: 150px;
    heugth: 150px}
    </style>`
);
