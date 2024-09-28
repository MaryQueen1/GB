import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );
}

export default App;
