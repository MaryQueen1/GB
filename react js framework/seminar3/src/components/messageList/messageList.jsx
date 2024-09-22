import { useState } from "react";

function MessagesList() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addMessage = () => {
    if (input.trim()) {
      setMessage([...message, { input, id: crypto.randomUUID() }]);
      setInput("");
    }
  };

  const enterClick = (e) => {
    if (e.key === "Enter") {
      addMessage();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={enterClick}
        placeholder="Введите СМС"
      />
      <button onClick={addMessage}>Отправить</button>
      <ul>
        {message.map((message) => (
          <li key={message.id}>{message.input}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessagesList;
