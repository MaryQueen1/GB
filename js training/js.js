function capitalizeFirstLetterOfEachWord(sentence) {
  return sentence
    .split(" ") // Разделяем строку на массив слов
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Заменяем первую букву на заглавную
    .join(" "); // Соединяем слова обратно в строку
}

// Пример использования
const input =
  "The `split('')` method splits a string into an array of individual characters The `reduce` method is used to reduce the array to a single value. String(n) This part converts the number `n` into a string.";
const output = capitalizeFirstLetterOfEachWord(input);
console.log(output);

