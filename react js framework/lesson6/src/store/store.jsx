// хранилище - объект, который содержит состояние приложения и представляет методы для его изменения
import { configureStore } from "@reduxjs/toolkit"; // создание хранилища redux
import todoReducer from "../reducers/todoReducer"; //  редюсеры отвечают за управление состоянием приложения на основе действий (actions)

// настройка redux хранилища с использование todoaraeducer
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// создаем экземпляр хранилища - configureStore
// параметр `reducer` принимает объект, в котором ключ — это имя состояния (в данном случае `todos`), а значение — это редюсер, который будет отвечать за это состояние (в данном случае `todoReducer`)
// вся информация о TODO-элементах будет храниться в состоянии с именем `todos` и будет управляться редюсером `todoReducer`

export default store;
