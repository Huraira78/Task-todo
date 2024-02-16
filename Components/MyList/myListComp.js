// MyComponent.js
import { useSelector,useDispatch } from 'react-redux';
import { selectTasks } from '../../Redux/TaskSlice';
import dayjs from 'dayjs';
import { Container } from '@mui/material';
import '../../styles/taskList.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { removeTask } from '../../Redux/TaskSlice';

const listComp = () => {
  const tasks = useSelector(selectTasks);

  const dispatch=useDispatch()

  const handleDelete = (task) => {
    dispatch(removeTask(task));
  };

console.log(tasks)
  

  return (
    <Container maxWidth="xl" className="mainTaskDiv">
      <div className='task1'>
        <div className='task2'>
          <p className='mainHeading'>Task List</p>
      <div className='taskBlock'>
        {tasks.map((task, index) => (
          <div key={index} className='taskLi'>
           <div> <p>Title: {task.task}</p>
            <p>Priority: {task.priority}</p>
            <p>Date: {dayjs(task.date).format('YYYY-MM-DD')}</p></div>
            <div><DeleteIcon onClick={() => handleDelete(task.task)} className='taskIcon'/><EditIcon className='taskIcon'/></div>
            
          </div>
        ))}
      </div>
        </div>
      </div>
    </Container>
  );
};

export default listComp;
