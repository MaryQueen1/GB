import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../actions/todoActions"; // действие, которое будет использоваться для изменения статуса задачи
import { FilterContext } from "../../contexts/FilterContext";
import withFilter from "../../hoc/withFilter";

const TodoList = () => {
  // получаем список задач из redux хранилища, Получение состояний и контекстов
  const todos = useSelector((state) => state.todos); // `todos`: используется `useSelector` для получения списка задач из Redux-хранилища
  const dispatch = useDispatch(); // `dispatch`: создается с помощью `useDispatch`, чтобы отправлять действия в Redux
  const { filter } = useContext(FilterContext);

  // применяем фильтр к задачам
  const filteredTodos = withFilter(todos, filter); // новый массив задач, полученный путем применения функции `withFilter` к массиву `todos` на основе текущего фильтра

  const handleToggleTodo = (id) => {
    // отправляем действие для изменения статуса задачи
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
