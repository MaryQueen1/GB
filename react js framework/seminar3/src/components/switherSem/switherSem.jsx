import { useState } from "react";
import { Box } from "../Box";

export const SwitcherSem = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button onClick={toggleTheme}>switchTheme</button>
      <Box theme={theme} />
    </>
  );
};
