import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";

export const Profile = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: "10px",
    backgrounColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    borderRadius: "5px",
  };

  return (
    <div style={style}>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Another information about user...</p>
    </div>
  );
};
