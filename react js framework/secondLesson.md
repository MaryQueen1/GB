> `state` (Состояние) - Veriable (Переменная) That Stores (Сохраняющая) The Value Assigned (Присвоенное) To It Inside The Component

```js
import React, { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
        <span className="counter">{count}</span>
        <button className="counter-button" onClick={updateCount}>+1</button>
    )
}
```
`const [count, setCount] = useState(0);`  
Hook `useState` - Creates A State Variable `count` Which Is Initialized With The Value `0`. 
`setCount` Is A Function = Update The Value Of `count`