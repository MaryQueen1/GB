import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Footer } from "../Footer/Footer";
import { WithLoadingIndicator } from "../WithLoadingIndicator/WithLoadingIndicator";

const Main = () => {
  const { changeUserName } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);

  const handleUserChange = (e) => {
    changeUserName(e.target.value);
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
      <Profile />
      <Footer />
    </main>
  );
};

export const MainWithLoading = WithLoadingIndicator(Main)