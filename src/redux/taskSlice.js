import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      return [...state, newItem];
    },
    remove(state, action) {
      const indexToRemove = action.payload;
      return state.filter((item) => item.id !== indexToRemove);
    },
    toggleCheck(state, action) {
      const taskId = action.payload;
      return state.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      );
    },
    deleteAll(state) {
      return (state = []);
    },
    deleteDoneTasks(state) {
      return state.filter((item) => !item.isChecked);
    },
  },
});

export const { add, remove, toggleCheck, deleteAll, deleteDoneTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
