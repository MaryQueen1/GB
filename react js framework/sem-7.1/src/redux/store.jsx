import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import usersSaga from "../sagas/usersSaga";
import usersReduser from "./userReduser";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = configureStore({
  reducer: { users: usersReduser },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then runthe saga
sagaMiddleware.run(usersSaga);

export default store;
