import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import favoriteReducer from "./slices/favoriteSlice";
import productReducer from "./slices/productSlice";
import loggerMiddleware from "../services/loggerMiddleware";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    favorite: favoriteReducer, // favoriteSlice
    products: productReducer,
  },
  middleware: (getDefauleMiddleware) => getDefauleMiddleware().concat(loggerMiddleware),
  // middleware: (getDefauleMiddleware) => [...getDefauleMiddleware(), loggerMiddleware],
});

export default store;
