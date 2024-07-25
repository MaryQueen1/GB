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
    console.log(`My name is ${this.name}. I'm ${this.age} years old and Iidentify as ${this.gender}.`);
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