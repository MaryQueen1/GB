import { Provider } from "react-redux"; // компонент из библиотеки `react-redux`, который позволяет интегрировать Redux с приложением React. Он предоставляет Redux-хранилище (store) и передает его всем компонентам приложения
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import TodoList from "./components/TodoList/TodoList";
import { FilterProvider } from "./contexts/FilterContext";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <FilterProvider>
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </FilterProvider>
    </Provider>
  );
}

export default App;
