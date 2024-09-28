import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user } = useContext(UserContext);
  const { name, email } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <div>ИМЯ {name}</div>
      <div>ИМЭИЛ {email}</div>
    </div>
  );
};
