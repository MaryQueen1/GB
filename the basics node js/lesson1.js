const http = require("http");

let homeViews = 0;
let aboutViews = 0;

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  if (req.url === "/") {
    homeViews++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });

    res.end(`
        <h1>Добро пожаловать на главную страницу!</h1>
        <p>Количество просмотров: ${homeViews}</p>
        <a href="/about">Перейти на страницу "Обо мне"</a>
      `);
  } else if (req.url === "/about") {
    aboutViews++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });

    res.end(`
        <h1>Добро пожаловать на страницу обо мне!</h1>
        <p>Количество просмотров: ${aboutViews}</p>
        <a href="/">Вернуться на главную страницу</a>
      `);
  } else {
    res.writeHead(400, {
      "Content-Type": "text/html; charset=UTF-8",
    });

    res.end("<h1>Страница не найдена!</h1>");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Станица запущена на порту ${port}`);
});
