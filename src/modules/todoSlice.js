import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    insert: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        checked: false,
        important: false,
      });
    },
    remove: (state, { payload: id }) => {
      return state.filter((todo) => todo.id !== id);
    },
    checked: (state, { payload: id }) => {
      return state.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
    },
    important: (state, { payload: id }) => {
      return state.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      );
    },
  },
});

export const { insert, remove, checked, important } = todoSlice.actions;
export default todoSlice.reducer;
