import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import favoriteReducer from "./slices/favoriteSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    favorite: favoriteReducer, // favoriteSlice
    products: productReducer,
  },
});

export default store;
