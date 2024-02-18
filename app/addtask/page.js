'use client'
import React from 'react'
import HomeLayout from './layout'
import Header from '@/Components/Header'
import AddTaskComp from '@/Components/AddTask/AddTaskComp'
import { Provider } from 'react-redux';
import store from '../../Redux/store'; 

const AddTask = () => {
  return (
    <Provider store={store}>
    <HomeLayout HeaderComp={Header}>
    <div><AddTaskComp/></div>
    </HomeLayout>
    </Provider>
  )
}

export default AddTask