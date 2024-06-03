// // // // // // Текст задания
// // // // // // 1. Создайте объект с ключами от 1 до 7, в качестве
// // // // // // значений содержащий имена дней недели. Выведите на
// // // // // // экран “Вторник”

// // // // // const week = {
// // // // //     first: "Monday",
// // // // //     second: "Tuesday",
// // // // //     third: "Wednesday",
// // // // //     forth: "Thursday",
// // // // //     fifth: "Friday",
// // // // //     sixth: "Saturday",
// // // // //     seventh: "Sunday"
// // // // // };
// // // // // console.log(week.second);

// // // // // // 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// // // // // // Выведите на экран фамилию, имя и возраст через дефис.

// // // // // const user = {
// // // // //     name: "Mary",
// // // // //     surname: "Koroleva",
// // // // //     age: 20,
// // // // // };
// // // // // console.log(`${user.name} - ${user.surname} - ${user.age}`);

// // // // // // 3. Добавьте в объект user свойство отчество, которое
// // // // // // пользователь должен ввести с клавиатуры

// // // // // user.patronymic = prompt("Введите ваше отчество");
// // // // // console.log(user);
// // // // // // 4. Удалите свойство surname

// // // // // delete user.surname;
// // // // // console.log(user);

// // // // // ---------------------------

// // // // // 1. Даны два массива: первый с названиями дней недели, а второй - с
// // // // // их порядковыми номерами:
// // // // const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// // // // const arr2 = [1, 2, 3, 4, 5, 6, 7];
// // // // const week = {};
// // // // // С помощью цикла создайте объект, ключами которого будут
// // // // // названия дней, а значениями - их номера.

// // // // for (let i = 0; i < arr1.length; i++) {
// // // //   week[arr1[i]] = arr2[i];
// // // // }
// // // // console.log(week);

// // // // // 1. const obj = {x: 1, y: 2, z: 3};
// // // // // Переберите этот объект циклом и возведите каждый элемент
// // // // // этого объекта в квадрат.

// // // // const obj = { x: 1, y: 2, z: 3 };
// // // // for (const key in obj) {
// // // //   if (obj.hasOwnProperty(key)) {
// // // //     obj[key] = obj[key] ** 2;
// // // //   }
// // // // }
// // // // console.log(obj);

// // // // -------------------------

// // // // Найдите сумму элементов приведенного объекта.

// // // const obj = {
// // //   key1: {
// // //     key1: 1,
// // //     key2: 2,
// // //     key3: 3,
// // //   },
// // //   key2: {
// // //     key1: 4,
// // //     key2: 5,
// // //     key3: 6,
// // //   },
// // //   key3: {
// // //     key1: 7,
// // //     key2: 8,
// // //     key3: 9,
// // //   },
// // // };

// // // const sum = Object.values(obj).reduce((acc, innerObj) =>
// // //   acc + Object.values(innerObj).reduce((acc, value) => acc + value, 0), 0);

// // // console.log(sum);

// // // // let summ = 0;

// // // // for (let key in obj) {
// // // //     let innerObj = obj[key];
// // // //     for (let innerKey in innerObj) {
// // // //         summ += innerObj[innerKey];
// // // //     }
// // // // }

// // // --------------------------------

// // // Создайте объект riddles
// // // Добавьте свойства question, answer
// // // создайте метод askQuestion который задает вопрос question и сравнивает ответ с answer
// // // Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// // // * По желанию, создать 2 подсказки, если пользователь ответил неверно

// // const riddles = {
// //   question: "Висит груша, нельзя скушать",
// //   answer: "лампочка",
// // }

// // let answ = prompt(riddles.question);
// // if (answ === riddles.answer) {
// //   console.log("Ура");
// // } else {
// //   console.log("NO");
// // }

// // -------------------------------

// // const riddles = {
// //   question: "What can we see with close eyes?",
// //   answer: "Dream",
// //   hints: ["This is happening every nigth", "Offently this is nice to feel"],
// //   askQuestion() {
// //     let userAnswer = prompt(this.question);
// //     if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
// //       console.log("Your answer is right");
// //     } else {
// //       console.log("You loose");

// //       let hintChoice = prompt("Do u want the hint? (yes/no)");
// //       if (hintChoice.toLowerCase() === "yes") {
// //         // let randomHintIndex = Math.floor(Math.random()*this.hints.length);
// //         let randomHintIndex = this.hints.pop();
// //         // console.log("Hint: " + this.hints[randomHintIndex]);
// //         console.log("Hint: " + randomHintIndex);
// //       }
// //     }
// //   },
// // };

// // riddles.askQuestion();

// // ---------------------------------
// const riddles = {
//   question: "Мягкие лапки, в лапках цапцарапки",
//   answer: "кошка",
//   assists: 0,
//   askQuestion: function () {
//     let userAnswer = prompt(this.question);
//     if (this.answer === userAnswer) {
//       console.log("Вы угадали");
//     } else {
//       if (this.assists === 0) {
//         this.assists += 1;
//         alert("Это животное");
//         riddles.askQuestion();
//       } else if (this.assists === 1) {
//         this.assists += 1;
//         alert("Это домашнее животное, мимимишное");
//         riddles.askQuestion();
//       } else {
//         console.log("Вы проиграли");
//       }
//     }
//   },
// };

// console.log(riddles.askQuestion());
