const parseData = JSON.parse(data);
console.log(parseData);
const contentEl = document.querySelector(".content");
parseData.forEach((item) => {
  contentEl.insertAdjacentHTML(
    "beforeend",
    `<h2>${item.name}</h2>
    <p>${item.username}</p>
    <span>${item.email}</span>
    <span>${item.address.city}</span>`
  );
});
