// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить

document.body.insertAdjacentHTML(
  "beforeend",
  `<form>
    <input type="checkbox">
    <label>Согласен с условиями</label>
    <br><button type="submit">Отправить</button>
   </form>`
);

// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const checkbox = document.querySelector('input[type="checkbox"]');
const btnEl = document.querySelector("button");
const form = document.querySelector("form");
let err = false;

btnEl.addEventListener("click", (e) => {
  if (!checkbox.checked && !err) {
    e.preventDefault();
    const text = document.createElement("p");
    text.textContent = "Необходимо чекнуть";
    btnEl.insertAdjacentElement("afterend", text);
    err = true;
  } else if (checkbox.checked) {
    form.submit();
  }
});

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

document.body.insertAdjacentHTML(
  "beforeend",
  `<form>
    <label><input type="radio" name="chooseDrink"
    id="tea" class="drinks-form">Чай</label>
    <label><input type="radio" name="chooseDrink"
    id="coffee" class="drinks-form">Кофе</label>
    <br><button class="drinks-button">Отправить</button>
    <p class="parag"></p>
   </form>`
);
const btnDrink = document.querySelector(".drinks-button");
const formDrink = document.querySelectorAll(".drinks-form");
const parEl = document.querySelector(".parag");
btnDrink.addEventListener("click", (e) => {
  e.preventDefault();
  formDrink.forEach((element) => {
    if (element.checked) {
      if (element.id === "tea") parEl.textContent = "Чай закончился";
      else if (element.id === "coffee") parEl.textContent = "Кофе закончился";
    }
  });
});

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

document.body.insertAdjacentHTML(
  "beforeend",
  `<form>
        <label>Введите пароль <input type="password" class="pass"></label>
        <br><button class="pass-but">Отправить</button>
    </form>`
);

const passEl = document.querySelector(".pass");
const passBtn = document.querySelector(".pass-but");
passBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (passEl.value === "пароль") {
    passEl.style.border = "3px solid green";
  } else {
    passEl.style.border = "3px solid red";
    passEl.placeholder = "Пароль неверный";
    passEl.value = "";
  }
});

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

document.body.insertAdjacentHTML(
  "beforeend",
  `<form><input type="text" class="input-text">
    <br><h1>Заголовок</h1></form>`
);

const inpText = document.querySelector(".input-text");
const headEl = document.querySelector("h1");
inpText.addEventListener("input", () => {
  headEl.textContent = inpText.value;
});
