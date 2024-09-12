import { useState } from "react";

function ListInputDelete() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddText = () => {
    if (input.trim()) {
      setText([...text, { input, id: crypto.randomUUID() }]);
      setInput("");
    }
  };

  const enterClick = (e) => {
    if (e.key === "Enter") {
      handleAddText();
    }
  };

  const handleDeleteText = (id) => {
    const updateText = text.filter((thisText) => thisText.id != id);
    setText(updateText);
  };

  return (
    <div>
      <h2>Какие-то письмена</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={enterClick}
        placeholder="Введите параграф летописи"
      />
      <button onClick={handleAddText}>Увековечить</button>
      <ul>
        {text.map((text) => (
          <li key={text.id}>
            {text.input}
            <button onClick={() => handleDeleteText(text.id)}>Сжечь</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListInputDelete;
