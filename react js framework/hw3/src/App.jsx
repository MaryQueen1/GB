import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter/TemperatureConverter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div>
      <div>
        {" "}
        <TemperatureConverter />
      </div>
      <div className="todo-block">
        <div className="container">
          {" "}
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
