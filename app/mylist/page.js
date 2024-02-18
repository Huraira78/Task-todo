'use client'
import React from 'react'
import HomeLayout from './layout'
import Header from '@/Components/Header'
import ListComp from '@/Components/MyList/myListComp'
import { Provider } from 'react-redux';
import store from '../../Redux/store'; 

const MyList = () => {
  return (
    <Provider store={store}>
    <HomeLayout HeaderComp={Header}>
    <div><ListComp/></div>
    </HomeLayout>
    </Provider>
  )
}

export default MyList