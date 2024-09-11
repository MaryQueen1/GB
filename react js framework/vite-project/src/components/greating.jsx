// function Greating() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// }

// const Greating = () => <h1>Привет, React!</h1>

function Greating() {
    const time = new Date().getHours();
    let greeting;
    if (time < 3) {
        greeting = "Доброй ночи"
    } else if (time < 12) {
        greeting = "Доброе утро"
    } else if (time < 18) {
        greeting = "Добрый день"
    } else {
        greeting = "Добрый вечер"
    }
    return (
        <h1>{greeting}, Vite + React!</h1>
    )
}

export default Greating;
