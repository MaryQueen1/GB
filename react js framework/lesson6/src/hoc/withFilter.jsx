// функция высшего порядка для фильтрации списка задач
const withFilter = (todos, filter) => {
  // два параметра: - `todos`: массив задач, которые необходимо фильтровать. - `filter`: строка, определяющая критерий фильтрации
  switch (filter) { //оператор `switch` для обработки значения `filter`
    case "completed":
      return todos.filter((todo) => todo.completed); // метода `filter`, который проверяет каждую задачу на наличие значения `completed` равного `true`
    case "active":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

export default withFilter;
