import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions"; // импортирование типов действий

const initialState = []; // начальное состояние редюсера. В данном случае оно инициализируется как пустой массив

// редьюсер для обработки действий с задачами
const todoReducer = (state = initialState, action) => {
  // текущее состояние `state` и объект действия `action`. Если `state` не передано, по умолчанию используется `initialState`
  switch (
    action.type // оператор `switch`, чтобы определить, какое действие было вызвано, исходя из типа действия(`action.type`)
  ) {
    case ADD_TODO:
      // добавляем новую задачу в список
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false },
      ]; // действие `ADD_TODO` происходит, в массиве `state` добавляется новый объект задачи с уникальным `id` (согласно текущему времени), текстом, который передается в `action.payload.text`, и статусом `completed`, установленным на `false` (задача не выполнена). Это делается с помощью оператора расширения `...state`, который копирует текущее состояние и добавляет к нему новую задачу.
    case TOGGLE_TODO:
      // изменяем статус задачи
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
