import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <p>{count}</p>
            <button onClick={updateCount}>Click +1</button>
        </div>
    )
}
export default Counter