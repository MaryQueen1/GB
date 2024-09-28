import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterReducer";
import { UserReducer } from "./userReducer";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    user: UserReducer,
  },
});
