import "./App.css";
import Counter from "./components/counter/counter";
import TextInput from "./components/textInput/textInput";
import Timer from "./components/timer/timer";
import TodoList from "./components/todoList/todoList";

function App() {
  return (
    <div>
      <Counter />
      <br />
      <TextInput />
      <br />
      <TodoList />
      <br />
      <Timer />
    </div>
  );
}

export default App;
