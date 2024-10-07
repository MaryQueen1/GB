const loggerMiddleware = (store) => (next) => (action) => {
  console.log("START MIDDLEWSRE")
  // middleware, стандартный порядок
  console.log("dispatch", action);
  // store это объект
  console.log(
    "состояние store, до того как сработает action",
    store.getState()
  );
  console.log(store);
  if (action.type === "todo/addTodo") {
    action.payload = action.payload + "! ! !"
  }
  const result = next(action);
  console.log(
    "состояние store после того как сработает action",
    store.getState()
  );
  return result;
};

// https://formik.org/
// https://react-hook-form.com/
// https://testing-library.com/docs/react-testing-library/intro/ - библиотека для написания тестов
// https://playwright.dev/docs/intro
// https://www.cypress.io/
// https://mobx.js.org/README.html
// https://tanstack.com/

export default loggerMiddleware