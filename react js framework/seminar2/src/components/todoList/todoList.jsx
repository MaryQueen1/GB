import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState(""); // текущий ввод
  const [todo, setTodo] = useState([]); // список дел

  // изменение текста в поле input
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // обработчик довабления нового действия
  const handleAddTodo = () => {
    // не является ли `input` пустым. Метод `trim()` убирает пробелы вначале и вконце строки
    if (input.trim()) {
      // добавляем новое дело в список. обновляем состояние `todos`, добавляя текущее значение `input` в конец массива
      // consnt newArray = [...todo, input];
      //   setTodo([...todo, { input, id: Date.now() }]);
      setTodo([...todo, { input, id: crypto.randomUUID() }]);
      // очищаем поле ввода
      setInput("");
    }

    // if (input === "") {
    // return
    //}
  };

  const enterClick = (e) => {
    // `key` — это свойство объекта события (`event`), которое содержит информацию о том, какая клавиша была нажата пользователем на клавиатуре
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <h2>Список дел</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={enterClick} // устанавливаем обработчик события нажатия клавиш,
        placeholder="Введите дело..."
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.input}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

// Создать компонент TodoList, который позволяет добавлять элементы в список дел через текстовое поле ввода. Список должен обновляться при добавлении нового дела.
