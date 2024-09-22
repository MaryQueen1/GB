import { useState } from "react";
import Button from "@mui/material/Button";

function Counter() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    if (count <= 0) {
        setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Число: {count}</p>
      <Button variant="outlined" onClick={minusCount}>
        Минус 1
      </Button>
      <Button variant="outlined" onClick={plusCount}>
        Плюс 1
      </Button>
    </div>
  );
}

export default Counter;

// export const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount((prevCount) => prevCount + 1);
//   const decrement = () => setCount((prevCount) => prevCount - 1);

//   return (
//     <>
//       <h2>Счетчик: {count}</h2>
//       <button onClick={decrement}>Минус 1</button>
//       <button onClick={increment}>Плюс 1</button>
//     </>
//   );
// };
