import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/CounterReducer";

export const Counter = () => {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => {dispatch(decrement())}}>-</button>
      <button onClick={() => {dispatch(increment())}}>+</button>
    </div>
  );
};
