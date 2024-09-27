import "./App.css";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { MainWithLoading } from "./components/Main/Main";

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
      {/* <MainWithLoading isLoading={true} /> */}
      <MainWithLoading />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
