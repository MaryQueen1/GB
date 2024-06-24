// В html создать кнопку button

const btnEl = document.createElement("button");
btnEl.textContent = "Button";
document.body.appendChild(btnEl);

// После загрузки страницы вывести в консоль текст “страница загрузилась”

window.onload = () => {
  console.log("Страница загружена");
};

// Добавить событие onclick которое выводит в консоль текст “событие onclick”

btnEl.onclick = () => {
  console.log("Событие onclick");
};

// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

btnEl.addEventListener("click", (event) => {
  console.log("Событие add addEventListener");
});

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)

const bodyEl = document.querySelector("body");
for (let i = 1; i < 4; i++) {
  bodyEl.insertAdjacentHTML("beforeend", `<button> Кнопка ${i} </button>`);
}

// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали

const btnArray = document.querySelectorAll("button");
btnArray.forEach((element) => {
  // element.onclick = () => {
  //     console.log(element);
  // }
  element.addEventListener("click", (event) => {
    console.log(event.target);
  });
});

// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль

const btnEl4 = document.createElement("button");
btnEl4.textContent = "Кнопка 4";
bodyEl.appendChild(btnEl4);
let counter = 0;
btnEl4.addEventListener("click", () => {
  counter++;
  console.log(`${counter} times`);
});

// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const btnEl5 = document.createElement("button");
btnEl5.textContent = "Конпка 5";
bodyEl.appendChild(btnEl5);
btnEl5.addEventListener("click", function () {
  btnEl5.textContent = "Вы нажали на эту кнопку";
});

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки

const btnEl6 = document.createElement("button");
btnEl6.textContent = "Кнопка h1";
bodyEl.appendChild(btnEl6);
const h1El = document.createElement("h1");
h1El.textContent = "Новый заголовок";
btnEl6.addEventListener("click", () => {
  bodyEl.insertAdjacentElement("beforeend", h1El);
});

// Создать вторую кнопку, которая будет удалять созданный заголовок h1

const btnEl7 = document.createElement("button");
btnEl7.textContent = "Удалить h1";
bodyEl.insertAdjacentElement("beforeend", btnEl7);
btnEl7.addEventListener("click", () => {
  bodyEl.removeChild(h1El);
});

// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const btnEl8 = document.createElement("button");
btnEl8.textContent = "Кнопка 8";
bodyEl.appendChild(btnEl8);
btnEl8.addEventListener("mouseover", () => {
  console.log("Вы навели на данную кнопку");
});
btnEl8.addEventListener("mouseout", () => {
  console.log("Наведения на кнопку больше нет");
});

// Создать в html список состоящий из 3-х произвольных элементов li

const ulEl = document.createElement("ul");
const liEl1 = document.createElement("li");
const liEl2 = document.createElement("li");
const liEl3 = document.createElement("li");
liEl1.textContent = "Элемент1";
liEl2.textContent = "Элемент2";
liEl3.textContent = "Элемент3";
bodyEl.appendChild(ulEl);
ulEl.append(liEl1, liEl2, liEl3);

// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”

const btn9 = document.createElement("button");
btn9.textContent = "Add Li";
bodyEl.after(btn9);
btn9.addEventListener("click", () => {
  ulEl.insertAdjacentHTML("beforeend", "<li>Новый элемент списка</li>");
});

// Создать кнопку, которая будет удалять первый элемент из созданного списка

const btn10 = document.createElement("button");
btn10.textContent = "delete first li";
btn9.after(btn10);
btn10.addEventListener("click", () => {
  ulEl.firstChild.remove();
})

// Создать кнопку, при клике на которую ей добавляется класс “click”

const btn11 = document.createElement("button");
btn11.textContent = "addClass";
btn10.after(btn11);
btn11.addEventListener("click", () => {
  btn11.classList.add("click");
  console.log(btn11);
})