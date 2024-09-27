import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const Footer = () => {
  const {theme} = useContext(ThemeContext);
  const year = new Date().getFullYear();

  const style = {
    padding: "10px",
    backgroundColor: theme === "light" ? "pink" : "black",
    color: theme === "light" ? "#000" : "white",
    textAlign: "center",
    borderRadius: "5px",
    marginTop: "20px"
  }

  return <footer style={style}>© {year} my app</footer>
}