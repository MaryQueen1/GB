// задание img 1

// let age = Number(prompt("How old are u?"));

// --------------------------------------------

// let age = +prompt("How old are u?");

// if (age<1) {
//     alert(`incorrect value`);
// }
// else if (age==1) {
//     alert(`You are ${age} год`);
// }
// else if (2<=age<=4) {
//     alert(`You are ${age} года`);
// }
// else if (age>0) {
//     alert(`You are ${age} years old`);
// }

// const name = prompt("What's ur name?");
// alert(`Welcom to our site, ${name}!`);

// --------------------------------------------

// function checkAge() {
//   let userAge = +prompt("Ваш возраст:");

//   if (userAge < 0) {
//     alert("Ввели неверное значение");
//     return;
//   } else if (userAge === 1) {
//     userAge = alert(`Ваш возраст: ${userAge} год`);
//   } else if (userAge >= 2 && userAge <= 4) {
//     userAge = alert(`Ваш возраст: ${userAge} года`);
//   }
// }

// checkAge();

// const userName = prompt("Ваше имя");
// if (userName) {
//   alert(`Добро пожаловать ${userName}`);
// }

// --------------------------------------------

// Текст задания
// 1. Найти остаток от деления двух переменных
// a. let a = 13;
// b. let b = 5;
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. let a;
// b. alert(a);
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert('abc' * 3);
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert( 1 / 0);
// b. alert(-1 / 0);
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert('2' * '3');

// --------------------------------------------

// let a = 13;
// let b = 5;
// let remainder = 13%5;
// console.log(remainder); // 3
// let c;
// console.log(c); // undefined
// console.log("def"*3); // NaN
// console.log(1/0); // Infinity
// console.log(-1/0); // -Infinity
// console.log("2"*"3"); // 6

// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что
// ошибка появляется в консоли. Определите, в какой строке кода
// случилась ошибка.

// let h = 1;
// consolelog(h);

// 2. Необходимо вывести в консоль результат суммы данных
// переменных
// a. let a = '2';
// b. let b = '3';

// let a = '2';
// let b = '3';

// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль
// вывести текст
// a. Сумма чисел равна “результат”
// b. Разность чисел равна “результат”
// c. Произведение чисел равно “результат”
// d. Частное чисел равно “результат”
// e. Остаток от деления чисел равен “результат”

// let num = +prompt("Введите двухзначное число");
// let second = num%10;
// let first = (num-second)/10;
// let sum = first+second
// console.log(`Сумма чисел равна ${sum}`);
// let diff = first-second;
// console.log(`Разность чисел равна ${diff}`);
// let multi = first*second;
// console.log(`Произведение чисел равно ${multi}`);
// let quo = first/second;
// console.log(`Частное чисел равно ${quo}`);
// let rem = first%second;
// console.log(`Остаток от деления чисел равен ${rem}`);

// ---------------------------------------------------

// 1. Не запуская код, определите, что выведется в консоль:
// a. console.log(String(true));
// 2. Не запуская код, определите, что выведется в консоль:
// a. console.log('a' + true);
// 3. Не запуская код, определите, что выведется в консоль:
// a. console.log(Number(true));
// 4. Не запуская код, определите, что выведется в консоль:
// a. console.log(true + 1);
// 5. Не запуская код, определите, что выведется в консоль:
// a. console.log(true + true)
// 6. Не запуская код, определите, что выведется в консоль:
// a. console.log(true - true)
// 7. Не запуская код, определите, что выведется в консоль:
// a. console.log( String(true) + Number(true) )

// console.log(String(true)); // true
// console.log('a' + true); // atrue
// console.log(Number(true)); // 1
// console.log(true + 1); // 2
// console.log(true + true); // 2
// console.log(true - true); // 0
// console.log( String(true) + Number(true) ); // true1

// 1. Пользователь с клавиатуры вводит число, Необходимо создать
// условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”

// let num = +prompt("Введите число")
// if (num>5){
//     console.log("Число больше 5");
// }
// else if (num<5) {
//     console.log("Число меньше 5");
// }
// else if (num==5) {
//     console.log("Число равно 5");
// }

// 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.

// ------------

// let test1 = 4;
// let test2 = 5;
// if (test1==test2){
//     console.log("Числа равны");
// } else {
//     console.log("Числа не равны");
// }

// ----------

// let test1 =  4;
// let test2 = 5;
// console.log((test1 === test2) ? "равны" : "не равны");

// ----------

// 3. Пользовать с клавиатуры вводит 2 числа
// a. Необходимо найти какое из двух чисел минимальное

// let num = +prompt("Введите двухзначное число");
// let second = num%10;
// let first = (num-second)/10;
// if (second>first) {
//     console.log("Первое число меньше второго");
// } else if (second<first) {
//     console.log("Первое число больше второго");
// } else {
//     console.log("Числа равны");
// }

// 4. Пользователь с клавиатуры вводит число, Проверьте, что данная
// переменная больше нуля и меньше 15.

// let num = +prompt("Введите число");
// if (0<num && num<15) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// ex img 2

// let year = 1996;
// if (year % 4 === 0 && year % 100 !== 0) {
//   console.log("Високосный год");
// } else if (year % 400 === 0) {
//   console.log("Високосный год");
// } else {
//   console.log("Не високосный год");
// }

// ---------------------

// const year = +prompt("Введите год");
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} Високоснаый год`);
// } else console.log(`${yaer} НЕ Вискосный год`);
