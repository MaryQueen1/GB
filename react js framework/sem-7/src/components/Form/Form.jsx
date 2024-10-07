import { useState } from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";

function Form() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch(); // дает команду redux выполнить action (addTodo)

  const handlerOnChange = ({ target }) => {
    setValue(target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    dispatch(addTodo(value)); // попадает в payload
    setValue("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input onChange={handlerOnChange} value={value} />
      <Button>Добавить</Button>
    </form>
  );
}

export default Form;
