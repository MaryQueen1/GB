function Button({ children, handlerClick = () => {} }) {
  // если нет функции то будет просто значение по умолчанию - пустое
  return <button onClick={handlerClick}>{children}</button>;
}

export default Button;
