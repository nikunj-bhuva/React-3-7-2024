import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  inputValue: "",
  editId: null,
  emptyMessage: false,
  lengthMessage: false,
  updateMessage: false,
  successFullUpdateMessage: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setAddTasks(state, action) {
      const newTask = action.payload.trim();
      if (newTask) {
        state.tasks = [...state.tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    setUpdateTasks(state, action) {
      const updatedTasks = [...state.tasks];
      updatedTasks[state.editId] = action.payload;
      state.tasks = updatedTasks;
      state.successFullUpdateMessage = true;
      state.editId = null;
      state.inputValue = "";
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setDeleteTasks(state, action) {
      const updatedTasks = state.tasks.filter(
        (_, index) => index !== action.payload
      );
      state.tasks = updatedTasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setEditId(state, action) {
      state.editId = action.payload;
    },
    setMessages(state, action) {
      const {
        emptyMessage,
        lengthMessage,
        updateMessage,
        successFullUpdateMessage,
      } = action.payload;
      state.emptyMessage = emptyMessage || false;
      state.lengthMessage = lengthMessage || false;
      state.updateMessage = updateMessage || false;
      state.successFullUpdateMessage = successFullUpdateMessage || false;
    },
  },
});

export const {
  setInputValue,
  setAddTasks,
  setUpdateTasks,
  setDeleteTasks,
  setEditId,
  setMessages,
} = todoSlice.actions;

export default todoSlice.reducer;
