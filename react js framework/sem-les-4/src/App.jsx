import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import { Box } from "./components/Box/Box";
import { List } from "./components/List/List";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListPage from "./components/ListPage/ListPage";
import DetailPage from "./components/DetailPage/DetailPage";

function App() {
  const items = [
    { text: "Пункт 1", style: { color: "red" } },
    { text: "Пункт 2", style: { color: "green" } },
    { text: "Пункт 3", style: { color: "blue" } },
    { text: "Пункт 4", style: { color: "purple", fontWeight: "bold" } },
  ];

  const generateListItems = () => {
    return items.map((item, i) => (
      <li key={i} style={item.style}>
        {item.text}
      </li>
    ));
  };

  return (
    <Router>
      <div>
        <h1>Задание 3</h1>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/list">Задание 4</Link>
          <Link to="/details/:id">Задание 4-1</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                {/* Задание 1 */}
                <h1>Задание 1</h1>
                <Box>
                  <h2>Заголовок</h2>
                  <p>Это параграф текста, обернутый в компонент Box.</p>
                </Box>

                <Box>
                  <img src="https://via.placeholder.com/150" alt="Пример" />
                </Box>

                <Box>
                  <button>Кнопка</button>
                </Box>

                <Box>
                  <p>Другой текст в Box.</p>
                  <p>И еще один параграф.</p>
                </Box>
              </div>

              <div>
                {/* Задание 2 */}
                <h1>Задание 2</h1>
                <h2>Список пунктов</h2>
                <List renderListItems={generateListItems} />
              </div>
            </div>
          } />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;