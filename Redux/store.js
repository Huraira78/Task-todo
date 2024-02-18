
import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from './TaskSlice';

export default configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});
