import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [{ id: 0, text: "initial", status: false }],
  },
  reducers: {},
});

export const { create, changeStatus } = todoSlice.actions;

export default todoSlice.reducer;
