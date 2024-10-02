import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const todo = useSelector((state) => state.todo); // принимает колбэк функция
  return (
    <ul>
      {todo.items.map((item) => (
        <li key={item.id}>
          <TodoItem {...item} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
