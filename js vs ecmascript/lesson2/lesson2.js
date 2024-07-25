"use strict"; // строгий режим (напримпер вместо this: window будет underfind)

// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке в консоль,
// включая его имя, возраст и пол. Метод changeName должен
// изменять имя человека на новое заданное значение.

// person.name = "John";
// person.age = 25;
// person.gender = "male";
// // "My name is John. I'm 25 years old and I identify as male."
// person.introduce();
// person.changeName("Mike");
// // "My name is Mike. I'm 25 years old and I identify as male."
// person.introduce();

const person = {
  name: "John",
  age: 25,
  gender: "male",

  // introduce: () => {
  //    console.log(this);
  //    Window {window: Window, self: Window, document: document, name: '', location: Location, …}

  // introduce: function() {
  //    console.log(this);
  // {name: 'John', age: 25, gender: 'male', introduce: ƒ, changeName: ƒ}

  introduce() {
    console.log(
      `My name is ${this.name}. I'm ${this.age} years old and Iidentify as ${this.gender}.`
    );
  },
  changeName(newName) {
    this.name = newName;
  },
};

// стрелочный запоминают this в момент создания

console.log(person.name);
person.introduce(); // in this кладется то, что перед точкой
person.changeName("Mike");
person.introduce();

// Создайте объект animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Одолжите метод eat() из объекта animal для
// объекта dog, чтобы вывести сообщение о том, что собака ест.

// dog.eat(); // "Rex eating."

const animal = {
  name: "Rex",
  eat() {
    console.log(`${this.name} кушац :)`);
  },
};

const dog = {
  name: "Rex",
  bark() {
    console.log(`${this.name} лаяц :)`);
  },
};

console.log(animal.name);
animal.eat();
dog.bark();
dog.eat = animal.eat; // присвоение нового свойства
dog.eat();
console.log(dog); // {name: 'Rex', bark: ƒ, eat: ƒ}

// Создайте обычную функцию add, которая будет складывать this.a и this.b
// и возвращать значение, которое получим.
// Создать объект, в котором будут свойства `a` и `b`, со значениями в виде
// чисел (любые значения).
// Необходимо вызвать функцию add так, чтобы она правильно отработала с
// нашим объектом.

const obj = {
  a: 5,
  b: 6,
};
function add() {
  console.log(this);
  return this.a + this.b;
}
// console.log(add());
// a = 5;
console.log(add.call(obj));

// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение в консоль с 
// представлением имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // "My name is John and I'm 25 years old."