import { configureStore } from "@reduxjs/toolkit";
import productReducer, { setInitialProducts } from "./slices/productSlice";
import initialProducts from "../data/data";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Вызываем действие с начальными продуктами при создании хранилища
store.dispatch(setInitialProducts(initialProducts))

export default store;
