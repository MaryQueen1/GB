// Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с
// возрастом 17" (только здесь данные, которые были
// переданы в функцию)

// function welcome(userName,serName,userAge) {
//     console.log(`Привет ${userName} ${serName} с возрастом ${userAge}`);
// }

//     const userName = prompt("Введите ваше имя");
//     const serName = prompt("Введите вашу фамилию");
//     const userAge = prompt("Введите ваш возраст");

// welcome(userName,serName,userAge);

// 2. Создайте функцию которая возводит переданное число в
// квадрат

// function square(namber) {
//     namber *= namber;
//     console.log(namber);
// }

// let nam = 5;
// square(nam);

// const power = (num) => num ** 2;
// console.log(power(5));

// 3. Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция выводит
// в консоль текст '+++', а во втором '---'.

// function posNeg(parameter) {
//     // if (parameter > 0) {
//     //     console.log("+++");
//     // } else if (parameter < 0) {
//     //     console.log("---");
//     // } else {
//     //     console.log("none");
//     // }
//     console.log(parameter >= 0 ? "+++" : "---");
// }

// let par = prompt("Введите число");
// posNeg(par);

// const checkNum = (number) => (number >= 0 ? "+++" : "---");
// console.log(checkNum(-2));
// console.log(checkNum(9));

// 1. Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.

// const power = (first, second, third) => +first + +second + +third;
// console.log(power(1, 2, 3));

// 2. С помощью созданной вами функции выведите в консоль сумму
// значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// // 1. Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// // Расскажите, каким будет результат каждого из вызовов функции.
// func(2); //4
// func(3); //9
// func(); //25

// Сделайте функцию (Math.sqrt(x)), которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль (используя функцию суммы). (3.732050807568877)

// const sqrt = (num) => Math.sqrt(num);
// let num1 = sqrt(3);
// let num2 = sqrt(4);
// const sum = (a, b) => a + b;
// console.log(sum(num1,num2));
// Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

// const checkNum = (number, num) =>
//   number > num
//     ? `${number} bigger than ${num}`
//     : `${num} bigger than ${number}`;
// console.log(checkNum(3, 5));

// 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

// function getDay(num) {
//   switch (num) {
//     case 1:
//       return "Monday";
//     case 2:
//       return "Thirsday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Tuesday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//     case 7:
//       return "Sunday";
//     default:
//       return "none";
//   }
// }

// let day = +prompt("Enter number from 1 to 7");
// console.log(`Dsy of the week: ${getDay(day)}`);

// // ----------------------------

// const checkedDate = (num) => {
//   const days = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ];
//   return days[num - 1];
// };
// 2. Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)

// function hello(name, time) {
//   let hi;
//   if (time >= 0 && time < 6) {
//     hi = `Good nigth, ${name}`;
//   } else if (time >= 6 && time < 12) {
//     hi = `Good morning, ${name}`;
//   } else if (time >= 12 && time < 18) {
//     hi = `Good afternoon, ${name}`;
//   } else {
//     hi = `Good evening, ${name}`;
//   }
//   return hi;
// }

// let userName = prompt("Enter ur name");
// const now = new Date().getHours();

// const message = hello(userName, now);
// console.log(message);

// Написать функцию, в которую передаем 2 аргумента, первое это вопрос на любую загадку, второе это ответ на данную загадку, необходимо сравнить ответ пользователя на загадку и вернуть, true или false значение
// Добавить подсказку, если пользователь ответил неверно

function quiz(ans) {
    let userAns = prompt("Висит груша, нельзя скушать, что это?");
    if (userAns === ans) {
        console.log(true);
    } else {
        console.log("Неверно, оно еще светится");
        oneMore(answer);
    }
}

function oneMore(ans) {
    let userAnsSecond = prompt("Попробуй еще раз. Висит груша, нельзя скушать, что это?")
    if (userAnsSecond === ans) {
        console.log(true);
    } else {
        console.log(false);
        console.log("Правильный ответ - груша");
    }
}

const answer = "груша";

quiz(answer)