import "../../App.css";

function Message({ text, anotherColorText }) {
  return (
    <div className="message-container">
      <h1 class="message-text">
        {text} <span className="message-another-text">{anotherColorText}</span>
      </h1>
    </div>
  );
}
export default Message;
