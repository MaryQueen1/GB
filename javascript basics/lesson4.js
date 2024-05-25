// Текст задания
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.

// ---------------------------

// const arr = [1, 2, 3];
// console.log(arr);

// ---------------------------

// const arr = [1, 2, 3];
// arr.forEach((element) => {
//   console.log(element);
// });

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.

// const arr1 = [1, 2, 3];
// console.log(arr1.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.

// const arr2 = ["a", "b", "c"];
// arr2[0] = 1;
// arr2[1] = 2;
// arr2[2] = 3;
// console.log(arr2);

// function randomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }

// ----------------------------------

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.

// const arr = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
// }
// console.log(arr);

// -----------------------------

// const arr = [1,2,3];
// const increase = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         array[i]++;
//     }
//     return array;
// }
// console.log(increase(arr));

// 2. Узнайте длину следующего массива:

// const arr1 = [];
// arr1[3] = 'a';
// arr1[8] = 'b';

// console.log(arr1.length);

// 1. Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

// const arr2 = [1, 2, 3];
// arr2.push(4,5);
// // arr2.forEach(element => {
// //     console.log(element);
// // });

// console.log(...arr2);

// 1. Создайте произвольный массив из 5 элементов, Удалите из него два
// элемента. Проверьте, какое станет значение свойства length после
// этого.

// const arr3 = [1,2,3,4,5];
// arr3.splice(2,2);
// arr3.forEach(element => {
//     console.log(element);
// });
// console.log(arr3.length);

// -------------------

// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.pop();
// console.log(arr);

// function deleteTwoEL(array, el) {
//   if (array.length > el) {
//     for (let i = 0; i < el; i++) {
//       array.pop();
//     }
//   }
// }

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// function numbers(min, max, numArray) {
//   for (let i = min; i <= max; i++) {
//     numArray.push(i);
//   }
//   return numArray;
// }

// let num1 = 11;
// let num2 = 33;
// const numbersArray = [];
// console.log(numbers(num1, num2, numbersArray));

// // 2. С помощью цикла for выведите в консоль нечетные числа в
// // промежутке от 1 до 99.

// function even(start, end, array) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 !== 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// let num3 = 1;
// let num4 = 99;
// const array2 = [];
// console.log(even(num3, num4, array2));

// // 3. С помощью цикла for выведите в консоль числа от 100 до 0.

// function interval(start, end, array) {
//   for (let i = start; i <= end; i++) {
//     array.push(i);
//   }
//   return array.reverse();
// }

// let num5 = 1;
// let num6 = 100;
// const array3 = [];
// console.log(interval(num5, num6, array3));

// 4. Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого.

// function multiplyByThreeUntilOver1000(num) {
//   let result = num;
//   let iterations = 0;

//   while (result <= 1000) {
//     result *= 3;
//     iterations++;
//   }

//   console.log("Начальное число: " + num);
//   console.log("Полученное число: " + result);
//   console.log("Количество итераций: " + iterations);
// }

// multiplyByThreeUntilOver1000(6);

// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но
// меньше 10.

// const arr = [2, 5, 9, 15, 1, 4];
// const filteredArray = arr.filter((element) => element > 3 && element < 10);
// console.log(filteredArray);

// 1. Найдите сумму четных чисел от 2 до 100.

// function evenSum(start, end) {
//   let result = 0;
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       result += i;
//     }
//   }
//   return result;
// }

//   let result = 0;
//   for (let i = start; i <= end; i += 2) { // если i = 2
//       result += i;
//   }
//   return result;
// }

// let num3 = 2;
// let num4 = 100;
// console.log(evenSum(num3, num4));

// 2. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

// function sumEl(array) {
//   let result;
//   for (let i = 0; i < array.length; i++) {
//     result = result + array[i];
//   }
//   return result;
// }

// const arr2 = [2, 5, 9, 3, 1, 4];
// console.log(sumEl(arr2));

// ----------------------

// const arr2 = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// array.forEach((element) => (sum += element));
// console.log(sum);

// -------------------------

// console.log(array.reduce((acc, sum) => acc + sum));
// console.log(array.reduce((acc, sum) => acc + sum, 10)); // 10 - стартовое значение


// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let resultStr = "-";
// for (let i = 1; i <= 9; i++) {
//   resultStr += i + "-";
// }
// console.log(resultStr);

// 2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

// const arr = [2, 5, 9, 0, 3, 1, 4];
// let i = 0;
// do {
//     console.log(array[i]);
//     i++;
// } while (array[i] !==0);

// -----------------------

// 1. дан массив состоящий из 10 элементов с произвольными числами.

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let randomNumbersArray = [];

// for (let i = 0; i < 10; i++) {
//   randomNumbersArray.push(getRandomNumber(1, 100));
// }

// console.log(randomNumbersArray);

// числа, которые делятся на 2, возведем в квадрат и выведем в консоль,
// числа, которые делятся на 3, возведем в куб и выведем в консоль.

// 2. С помощью двух вложенных циклов выведите на экран следующую
// строку:
// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
// 1. Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]
