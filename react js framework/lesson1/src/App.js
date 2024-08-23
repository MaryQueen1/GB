// import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import MessageList from "./components/list";
import RefExample from "./components/ref";
import Timer from "./components/timer";
import Show from "./components/visible";

function App() {
  const userName = "Mary";
  return (
    <div>
      <h1>Hello {userName}</h1>
      <Timer />
      <Counter />
      <Show data="Текст из компонента" />
      <Show data="Другой текст" />
      <RefExample />
      <MessageList />
    </div>
  );
}

export default App;
