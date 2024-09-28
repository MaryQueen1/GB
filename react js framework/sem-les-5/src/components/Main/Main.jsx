import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Footer } from "../Footer/Footer";
import { WithLoadingIndicator } from "../WithLoadingIndicator/WithLoadingIndicator";
import { Counter } from "../Counter/Counter";
import { useDispatch } from "react-redux";
import { updateNameAndEmail } from "../../store/userReducer";

const Main = () => {
  const { changeUserName } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleUserChange = (e) => {
    changeUserName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNameAndEmail({name, email}))
  };

  return (
    <main>
      <Header />
      <input
        type="text"
        placeholder="Enter user name"
        onChange={handleUserChange}
      />
      <button onClick={toggleTheme}>Change theme</button>

      <form onSubmit={handlerSubmit} style={{padding: "20px"}}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Отправить</button>
      </form>

      <Profile />
      <Counter />
      <Footer />
    </main>
  );
};

export const MainWithLoading = WithLoadingIndicator(Main);
