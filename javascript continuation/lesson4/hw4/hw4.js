// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const fromEl = document.querySelector("#from");
const spanEl = document.querySelector("span");
fromEl.addEventListener("input", () => {
  spanEl.textContent = fromEl.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messBtn = document.querySelector(".messageBtn");
const messEl = document.querySelector(".message");
messBtn.addEventListener("click", () => {
  messEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  console.log(messEl);
  messEl.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");
const submitBtn = form.querySelector("button");

submitBtn.addEventListener("click", function (event) {
  const fields = form.querySelectorAll("input, select");

  if (hasEmptyFields(fields)) {
    event.preventDefault();
    fields.forEach(function (field) {
      if (!field.value) {
        field.style.backgroundColor = "red";
      }
    });

    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.value) {
          field.style.backgroundColor = "";
        }
      });
    });
  } else {
    form.submit();
  }
});

function hasEmptyFields(fields) {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      return true;
    }
  }
  return false;
}

// данный код не получилось сделать самостоятельно, к сожалению...
