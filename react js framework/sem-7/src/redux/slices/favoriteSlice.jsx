import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
      //   state.items = [...new Set([...state.items, action.payload])];
      // },
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
