// import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import InputForm from "./components/form";
import MessageList from "./components/list";
import BasicList from "./components/list-super";
import Nav from "./components/menu";
import ParentCount from "./components/parent";
import Student from "./components/propType";
import HoverRating from "./components/raiting";
import RefExample from "./components/ref";
import Timer from "./components/timer";
import Show from "./components/visible";

function App() {
  const userName = "Mary";
  return (
    <div>
      <h1>Hello {userName}</h1>
      <Nav />
      <HoverRating/>
      <Timer />
      <Counter />
      <Show data="Текст из компонента" />
      <Show data="Другой текст" />
      <RefExample />
      <MessageList />
      <ParentCount />
      <InputForm />
      <BasicList/>
      <Student name="Дима" age={30} isStudent={true}/>
    </div>
  );
}

export default App;
