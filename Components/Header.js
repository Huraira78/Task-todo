import React from 'react'
import '../styles/header.scss'
import Link from 'next/link'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentIcon from '@mui/icons-material/Assignment';


const Header = () => {
  return (
    <div className='mainHeader'>
      <div className='logoDiv'><h3>My Task</h3></div>
      <div className='Menu'><Link href="/mylist"><FormatListBulletedIcon className='headerIcon'/>Task List</Link><Link href="/addtask"><AssignmentIcon className='headerIcon'/>Add Task</Link></div>
    </div>
  )
}

export default Header