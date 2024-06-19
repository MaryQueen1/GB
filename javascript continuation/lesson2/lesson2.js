// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

const blockEl = document.querySelector(".block");
const itemInBlock = document.createElement("div");
itemInBlock.classList.add("item");
itemInBlock.textContent = "Элемент внутри";
blockEl.appendChild(itemInBlock);

//

itemInBlock.style.color = "blue";
itemInBlock.style.border = "1px solid black";
itemInBlock.style.backgroundColor = "#f8f8f8";
itemInBlock.style.padding = "16px";

//

itemInBlock.setAttribute("class", "item_1");

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const pTextEl = document.querySelector(".text");
const hEl = document.querySelector("h2");
const contentParentEl = document.querySelector(".content").parentNode;
const imgEl = document.querySelector("img");
const elemParentEl = document.querySelector(".elem").parentNode;
console.log(hEl);
console.log(contentParentEl);
console.log(imgEl);
console.log(elemParentEl);

// --------------правильнее ниже---------------

console.log(pTextEl.previousSibling);
console.log(pTextEl.previousElementSibling);

console.log(pTextEl.parentElement);

console.log(pTextEl.parentElement.previousElementSibling);

console.log(pTextEl.parentElement.parentElement);

// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
console.log("--------------------------------------");

const subtitleEl = document.querySelector(".subtitle");

console.log(subtitleEl.parentElement);
console.log(subtitleEl.parentElement.parentElement);
console.log(subtitleEl.parentElement.parentElement.parentElement);
console.log(subtitleEl.parentElement.parentElement.parentElement.parentElement);

// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('input');
const formEl = document.querySelector('form');
let h2El = document.querySelector('.h2');

btnEl.addEventListener("click", (event) => {
  if (inputEl.value.trim() === "") {
    // trim для того, чтоб пробел не считался символом
    event.preventDefault();
    // по умолчанию при нажатии отправляется в форму, а на этой строчке мы останавливаем стандартное поведение  
    if (!h2El) {
      // если h2 нет
      h2El = document.createElement('h2');
      h2El.textContent = "не заполнено поле";
      inputEl.after(h2El);
    }
    inputEl.style.border = "4px solid red";
  } else {
    if (h2El) {
      inputEl.style.border = "1px solid black";
      h2El.remove();
      formEl.submit();
      formEl.reset();
    }
  }
});
// тригге на событие call back funck
// если на кнопку кликнули, то выполняется функци
