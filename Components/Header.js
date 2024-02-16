'use client'
import React from 'react'
import '../styles/header.scss'
import Link from 'next/link'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useRouter } from 'next/navigation';
import PowerSettingsNewSharpIcon from '@mui/icons-material/PowerSettingsNewSharp';
import Popover from '@mui/material/Popover';


const Header = () => {
  const router=useRouter()
  const logoutFunc=()=>{
    console.log('called');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
      router.push('/signin')
    
  }
  const username=localStorage.getItem('username');
  return (
    <div className='mainHeader'>
      <div className='logoDiv'><h3>Welcome {username}</h3></div>
      <div className='Menu'><Link href="/mylist"><FormatListBulletedIcon className='headerIcon'/>Task List</Link><Link href="/addtask"><AssignmentIcon className='headerIcon'/>Add Task</Link>
      <PowerSettingsNewSharpIcon className='powerIcon' onClick={()=>logoutFunc()}/></div>
    </div>
  )
}

export default Header