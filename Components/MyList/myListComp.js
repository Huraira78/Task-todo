// MyComponent.js
import { useSelector,useDispatch } from 'react-redux';
import { selectTasks } from '../../Redux/TaskSlice';
import dayjs from 'dayjs';
import { Container } from '@mui/material';
import '../../styles/taskList.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { removeTask,setEditedTask } from '../../Redux/TaskSlice';
import { useRouter} from 'next/navigation';
import Swal from 'sweetalert2';
import { ErrorMessage } from '@/AlertMessages/alertmessages';
import { useEffect } from 'react';



const ListComp = () => {
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();
    const router=useRouter();
  
    const priorityOrder = ['high', 'medium', 'low'];
    const sortedTasks = tasks.slice().sort((a, b) => {
      return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    });
    const handleEdit = (task) => {
            dispatch(setEditedTask(task)); 
            router.push('/addtask')
      };
    const handleDelete = (taskId) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(removeTask(taskId));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      };
      
      useEffect(()=>{
if(tasks.length===0){
    router.push('/addtask',{replace:true})
    ErrorMessage('Please Add Task First');
}
      },[])
  
    return (
      <Container maxWidth="xl" className="mainTaskDivList">
        <div className='task1'>
          <div className='task2'>
            <p className='mainHeading'>Task List</p>
            <div className='taskBlock'>
              {sortedTasks.map((task, index) => (
                <div key={index} className='taskLi'>
                  <div>
                    <p>Title: {task.task}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Date: {dayjs(task.date).format('YYYY-MM-DD')}</p>
                  </div>
                  <div>
                    <DeleteIcon onClick={() => handleDelete(task.task)} className='taskIcon' />
                    <EditIcon  onClick={() => handleEdit(task)} className='taskIcon' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  };
  
  export default ListComp;