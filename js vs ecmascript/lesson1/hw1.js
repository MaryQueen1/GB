console.log("Домашнее задание 1.");

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

console.log(Math.min(...[1, 5, 7, 9]));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCalculator(initialValue) {
  // начальное значение
  function increment(argument) {
    return (initialValue += argument);
  }
  function decrement(argument) {
    return (initialValue -= argument);
  }
  return { increment, decrement };
}
const calculator = createCalculator(0);
console.log("результат add (Калькулятор)");
console.log(calculator.increment(1));
console.log("результат subtract (Калькулятор)");
console.log(calculator.decrement(1));

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
  if (root.classList && root.classList.contains(className)) {
    return root;
  }

  for (let i = 0; i < root.children.length; i++) {
    const found = findElementByClass(root.children[i], className);
    if (found) {
      return found;
    }
  }

  return null;
}

const result1 = findElementByClass(document.body, "target");
console.log('Первый найденный элемент с классом "target":', result1);

const result2 = findElementByClass(document.body, "nonexistent");
console.log('Элемент с классом "nonexistent":', result2);

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
