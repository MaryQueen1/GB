// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
  if (i == 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 == 0) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(...arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumbersArray = [];
for (let i = 0; i < 5; i++) {
  randomNumbersArray.push(getRandomNumber(0, 9));
}
console.log(`${randomNumbersArray} - random array with length 5`);

// 1. Рассчитать сумму элементов этого массива

let result = 0;
for (let i = 0; i < randomNumbersArray.length; i++) {
    result += randomNumbersArray[i];
}
console.log(`${result} - array sum`);

// 2. Найти минимальное число

const min = Math.min(...randomNumbersArray);
console.log(`${min} - min number in array`);

// 3. Найти есть ли в этом массиве число 3

let remember = 0;
for (let i = 0; i < randomNumbersArray.length; i++) {
    if (randomNumbersArray[i] == 3) {
        remember++;
    }
}
console.log(`We have ${remember} threes in this array`);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let row = '';
for (let i = 0; i <= 20; i++) {
    row += 'x';
    console.log(row);
}