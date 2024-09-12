import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  // нужен чтобы выполнить побочное действие, запомнит функцию
  useEffect(() => {
    // const timer = setInterval(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    //  }, []);
  }, [time]);

  return (
    <div>
      <p>Сайт не обновлялся: {time} sec</p>
    </div>
  );
}

export default Timer;
