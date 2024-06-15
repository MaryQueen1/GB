const blockEl = document.querySelector("#block");
console.log(blockEl);
// мы вывели 
// <div id="block">
//   <p>1</p>
//   <p>2</p>
// </div>
// в консоль
const paragraphEl = document.querySelector('p.www');
console.log(paragraphEl);
// первый элемент www
const paragraphElAll = document.querySelectorAll('.www')[0];
console.log(paragraphElAll);
// коллекция www (массив), вывести первый
const linkEl = document.querySelector('.link');
// запрос class = "link";
linkEl.href = 'https://developer.mozilla.org/ru/';
// меняем ссылку
linkEl.textContent = 'link text js';
// меняем тект ссылки
console.log(linkEl);
console.dir(linkEl);
// 
const srcEl = document.querySelector('.photo');
// 
// // srcEl.src = 'https://gas-kvas.com/uploads/posts/2023-02/1675311009_gas-kvas-com-p-risunok-v-stile-piksel-art-31.jpg';
// меняем картинку в классе photo
console.log(srcEl);
// 
const contentEl = document.querySelector('.content');
// 
const paragraphElNew = document.createElement('p');
// 
paragraphElNew.textContent = 'Новый текстовый элемент';
// 
contentEl.appendChild(paragraphElNew);
// добавляем эль внутрь content
paragraphElNew.remove();
// удалили контент в .content (добавленный узел)
console.log(contentEl);
// 
const buttonEl = document.createElement('button');
// 
contentEl.appendChild(buttonEl);
// 
buttonEl.textContent = 'Click';
// 
let count = 0;
// 
buttonEl.onclick = function() {
    // при нажатии
    count++;
    console.log(`Нажато ${count} раз`);
}
// 
const sendButEl = document.createElement('button');

contentEl.appendChild(sendButEl);
sendButEl.textContent = 'Отправить';
sendButEl.onclick = function () {
    sendButEl.textContent = 'Текст отправлен';
}
