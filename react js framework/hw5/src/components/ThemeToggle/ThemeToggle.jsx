import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeReducer";
import { useEffect } from "react";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <h1>{isDarkTheme ? "Темная тема" : "Светлая тема"}</h1>
      <button onClick={handleToggle}>Переключить тему</button>
    </div>
  );
};

export default ThemeToggle;
