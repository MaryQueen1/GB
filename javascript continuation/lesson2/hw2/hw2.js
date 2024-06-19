// 1. Ко всем элементам, имеющим класс 'dropdown-item' добавить еще один класс 'super-dropdown', необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
  item.classList.add("super-dropdown");
  console.log(item);
});

// 2. У элемента с классом btn необходимо убрать класс 'btn-secondary', если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnEl = document.querySelector(".btn");
const checkClass = (element) =>
  element.classList.contains("btn-secondary") == true
    ? element.classList.remove("btn-secondary")
    : element.classList.add("btn-secondary");
checkClass(btnEl);
console.log(btnEl);

// 3. Необходимо удалить класс 'dropdown-menu' у элемента, у которого присутствует класс 'menu'.

const menuEl = document.querySelector(".menu");
if (menuEl.classList.contains("dropdown-menu")) {
  menuEl.classList.remove("dropdown-menu");
}

console.log(menuEl);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом 'dropdown' следующую разметку:
// `<a href='#'>link</a>`

const dropdownEl = document.querySelector("div.dropdown");
dropdownEl.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// ------------------------

// EXAMPLE -----------------------------------------
// element.insertAdjacentHTML('beforebegin', '<p>This is a new paragraph</p>');

// 'beforebegin': Вставляет HTML-разметку перед указанным элементом.
// 'afterbegin': Вставляет HTML-разметку внутрь указанного элемента в начало его содержимого.
// 'beforeend': Вставляет HTML-разметку внутрь указанного элемента в конец его содержимого.
// 'afterend': Вставляет HTML-разметку после указанного элемента.

// ------------------------

// 5. У элемента с id 'dropdownMenuButton' замените id на 'superDropdown'.

const dropdownButton = document.querySelector('#dropdownMenuButton')
dropdownButton.id = 'superDropdown';
console.log(dropdownButton);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут 'aria-labelledby' равный 'dropdownMenuButton' используя dataset.

const secondItem = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
secondItem.dataset.dd = '3';
console.log(secondItem);

// 7. Удалите атрибут type у элемента с классом 'dropdown-toggle'.

const dropToggle = document.querySelector('.dropdown-toggle');
dropToggle.removeAttribute('type');
console.log(dropToggle);