// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
  // параметры
  return [...arr1, ...arr2];
}
const array = [1, 2, 3];
const array2 = [4, 5, 6];
// аргументы
console.log("новый массив, содержащий все элементы из обоих массивов");
console.log(mergeArrays(array, array2));

// Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5]

function removeDuplicates(...rest) {
  // (...rest) - принимаю сколько хочу значений
  return [...new Set(rest)]; // new Set(rest) но переделанный в массив
}
console.log("новый массив, содержащий только уникальные значения");
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(array) {
  return array.filter((el) => el % 2 === 0);
}
console.log("новый массив, содержащий только четные числа");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

/**
 *
 * @param {Array} array - это массив :)
 * @returns
 */

function calculateAverage(array) {
  return array.reduce((accumulator, el) => accumulator + el, 0) / array.length;
  // acc - собирает/аккумулирует значения в одно
  // , 0 - начинается с нуля
}
console.log("среднее значение чисел массива");
console.log(calculateAverage([1, 2, 3]));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter(str) {
  const str1 = str.split(" ");
  return str1.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
}
console.log(
  capitalizeFirstLetter("первая буква каждого слова является заглавной")
);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
  // начальное значение
  function add(argument) {
    return (initialValue += argument);
  }
  function subtract(argument) {
    return (initialValue -= argument);
  }
  return { add, subtract };
}
const calc = createCalculator(45);
console.log("результат add (Калькулятор)");
console.log(calc.add(5));
console.log("результат subtract (Калькулятор)");
console.log(calc.subtract(5));

// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет возвращать
// приветствие с использованием этого имени.

// // Пример использования:
// const greeting = createGreeting('John');
// console.log(greeting()); // "Hello, John!"

function createGreeting(userName) {
  return () => `Hello, ${userName}!`;
}
const greeting = createGreeting("John");
console.log(greeting());

// Напишите функцию createPasswordChecker, которая
// принимает минимальную длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина больше или равна заданной длине,
// в противном случае - false.

function createPasswordChecker(minLengthPassword) {
  return (password) => password.length >= minLengthPassword;
}

const isPasswordValid = createPasswordChecker(8);

console.log(isPasswordValid("password")); // true
console.log(isPasswordValid("secret")); // false
// console.log(createPasswordChecker(8)("passworawdawdd"));

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.

// // Пример использования:
console.log(sumDigits(123)); // 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(num) {
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sumDigits(Math.floor(num / 10));
  }
}

// function sumDigits(num) {
//   if (num === 1) {
//     return 1;
//   } else {
//     return sumDigits(num - 1) + num;
//   }
// }
// console.log(sumDigits(123)); // 7626
