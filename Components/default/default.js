"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DefaultPage = () => {
    const router=useRouter()
    useEffect(()=>{
const token="";
if(!token){
    router.push('/signin');
}else{
    router.push('/addtask')
}
    },[])
  return (
    <div></div>
  )
}

export default DefaultPage