import { useEffect, useState } from "react";

const InputForm = () => {
  const [inputValue, setInputValue] = useState(""); // значение в форме
  const [submittedValue, setSubmittedValue] = useState(""); // передаваемое значение через форму

  useEffect(() => { // срабатывает каждый раз, когда изменяется `inputValue`
    console.log("Input value changed:", inputValue);
  }, [inputValue]);

  const handleSubmit = (e) => { // срабатывает при отправке формы
    e.preventDefault(); // предотвращает стандартное поведение формы (перезагрузку страницы)
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>Submitted value: {submittedValue}</p>}
    </div> 
    // <form onSubmit={handleSubmit}> при отправке формы будет вызван обработчик `handleSubmit`
    // Изменения в текстовом поле будут вызывать обновление состояния с помощью `onChange`
    // если `submittedValue` не пустое, будет показан параграф с текстом отправленного значения
  );
};

export default InputForm;