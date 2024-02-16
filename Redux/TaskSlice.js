// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   task: null,
// };

// const taskSlice = createSlice({
//   name: 'task',
//   initialState,
//   reducers: {
//     setTask: (state, action) => {
//       state.task = action.payload;
//     },
//     clearTask: (state) => {
//       state.task = null;
//     },
//   },
// });

// export const { setTask, clearTask } = taskSlice.actions;
// export const selectTask = (state) => state.task.task;

// export default taskSlice.reducer;


// // taskListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
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
  },
});

export const { addTask ,removeTask} = taskListSlice.actions;
export const selectTasks = (state) => state.taskList.tasks;

export default taskListSlice.reducer;
