import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    create: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    delete: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeStatus: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, status: !task.status } : task,
      );
    },
  },
});

export const { create, delete: deleteTask, changeStatus } = todoSlice.actions;

export default todoSlice.reducer;
