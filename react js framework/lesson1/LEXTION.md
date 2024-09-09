## SPA - single page application
загрузка всех блоков страницы (даже скртых)

- можно реализовать сложную логику
- fast wirk
- экономия трафика
- запросов на любой сервер больше, но они проще
- простые способы реализовать кеширование 
<br><br>
- долгая первая загрузка
- знание HTML и JS
- trubbles with SEO (продвижение) -> пока страница не запущена, поисковый робот не видит контента

## Webpack & Babel
структурирование для всех

```
let a = () => ();
let b = (c) => c;

// для браузера ниже

var a = function(){};
var b = function (c){
    return c;
};
```

- gulp, grunt, parcel, browserify - конкуренты, аналоги
- генерация нескольких файлов (в том числе поддерживающих по несколько модулей сразу)
- динамическая подгрузка страницы
- масса плагинов для обработки кода
- динамоческое обновление кода во время его работы без потери состояния программы

### CRA - create-react-app - настройка для работы с React
## Основные хуки

- useState
- useEffect
- useCallback
- useRef
- useMemo