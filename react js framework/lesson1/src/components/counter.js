import { useState } from "react";

function Counter(params) {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 2);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={updateCount}>Click +2</button>
    </div>
  );
}

export default Counter;

