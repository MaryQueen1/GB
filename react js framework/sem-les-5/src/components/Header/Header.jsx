import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);
  return <h1>Hello, {user.name}!</h1>;
};
