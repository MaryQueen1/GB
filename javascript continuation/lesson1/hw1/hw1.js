// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

// ```

// <script>
// "use strict";
// ``
// []()
// []()

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()

const superLinkEl = document.getElementById("super_link");
const superLinkElTwo = document.querySelector("#super_link");
console.log(superLinkEl);
console.log(superLinkElTwo);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()

const cardLinkElAll = document.querySelectorAll(".card-link");
cardLinkElAll.forEach((element) => {
  element.textContent = "ссылка";
});
console.log(cardLinkElAll);

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()

const cardLinkInCardBodyEl = document.querySelectorAll(".card-link .card-body");
console.log(cardLinkInCardBodyEl);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()

const dataNumberFiftyEl = document.querySelector('[data-number="50"]');
console.log(dataNumberFiftyEl);

// 5. Выведите содержимое тега title в консоль.
// []()

console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()

const parentCardTitleEl = document.querySelector(".card-title").parentNode;
console.log(parentCardTitleEl);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const pTagEl = document.createElement('p');
pTagEl.textContent = "Привет";
document.querySelector('.card').prepend(pTagEl);

// 8. Удалите тег h6 на странице.

document.querySelector('h6').remove();