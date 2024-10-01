import { useState } from "react"; // позволяет добавлять локальное состояние в функциональные компоненты
import { useDispatch } from "react-redux"; // возвращает функцию `dispatch` для отправки действий в Redux
import { addTodo } from "../../actions/todoActions";

const AddTodo = () => {
  // Локальное состояние для текста новой задачи
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // Вызывает `dispatch(addTodo(text))`, чтобы отправить действие `addTodo`, передавая текст новой задачи в качестве аргумента

  const handleAddTodo = () => {
    // отправляем действие для добавления новой задачи
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>добавить задачу</button>
    </div>
  );
  // обновляет состояние `text` с помощью `setText`
};

export default AddTodo;
