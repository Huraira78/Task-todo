
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  editedTask: null,
};

const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      const taskIdToRemove = action.payload;
      state.tasks = state.tasks.filter(task => task.task !== taskIdToRemove);
    },
    setEditedTask: (state, action) => {
      state.editedTask = action.payload;
    },
    clearEditedTask: (state) => {
      state.editedTask = null;
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      state.tasks = state.tasks.map(task => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      });
      state.editedTask = null; // Clear the edited task after update
    },
  },
});

export const { addTask, removeTask, setEditedTask, clearEditedTask, updateTask } = taskListSlice.actions;
export const selectTasks = (state) => state.taskList.tasks;
export const selectEditedTask = (state) => state.taskList.editedTask;

export default taskListSlice.reducer;
