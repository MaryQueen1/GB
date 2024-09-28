import "./App.css";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { MainWithLoading } from "./components/Main/Main";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <ThemeProvider>
          {/* <MainWithLoading isLoading={true} /> */}
          <MainWithLoading />
        </ThemeProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
