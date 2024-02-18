"use client"
import { useEffect, useState } from 'react';
import { Container, TextField, Select, MenuItem, Button, FormControl, InputLabel, makeStyles } from '@mui/material';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import '../../styles/addTask.scss';
import "react-datepicker/dist/react-datepicker.css";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ErrorMessage, SuccessMessage } from '@/AlertMessages/alertmessages';
import { useDispatch,useSelector } from 'react-redux';
import { addTask, updateTask, clearEditedTask,selectEditedTask  } from '../../Redux/TaskSlice';


const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch=useDispatch();
  const editedTask = useSelector(selectEditedTask); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (editedTask) {
      setTaskTitle(editedTask.task);
      setPriority(editedTask.priority);
    }
  }, [editedTask]);

  const handleAddTask = () => {
    if (!taskTitle || !priority || !selectedDate) {
      ErrorMessage('Please fill in all fields.');
      return;
    } else {
      const newTask = {
        task: taskTitle,
        priority: priority,
        date: selectedDate
      };
  
      if (editedTask) {
        dispatch(updateTask({ ...editedTask, ...newTask }));
      SuccessMessage('Task Updated Successfully');
      } else {
        dispatch(addTask(newTask));
        SuccessMessage('Task Added Successfully');
      }
  
      setTaskTitle('');
      setPriority('');
      setSelectedDate(null);
    }
  };
  
  

  return (
    <Container maxWidth="xl" className="mainTaskDiv">
      <div className='task1'>
        <div className='task2'>
          <p className='mainHeading'>Generate Task</p>
          <TextField
            label="Task"
            variant="outlined"
            className="formControl"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <FormControl variant="outlined" className="formControl">
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              label="Priority"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'low'}>Low</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'high'}>High</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Task Date"
              value={selectedDate}
              onChange={handleDateChange}
              className="formControl"
            />
          </LocalizationProvider>
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default AddTask;
