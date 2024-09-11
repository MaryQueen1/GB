```
npx create-react-app seminar1
cd seminar1
npm start
```

`npm i npm -g` - Remove And Chenge Packages

**Vite** - Our Future

```
npm create vite@latest

√ Project name: ... vite-project
√ Select a framework: » React
√ Select a variant: » JavaScript

cd vite-project
npm install
npm run dev
```
If U Need `scss`, U Need To Instal It Too: `npm i sass` It Will Install In node.modules
```
package.json
"dev": "vite --open",
```
We Create cd `components` And Working There:
```js
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
```
In `App.js` We Output The Result:

```js
import Counter from "./components/counter";

function App() {
  const userName = "Mary";
  return (
    <div>
      <h1>Hello {userName}</h1>
      <Counter />
    </div>
  );
}

export default App;
```