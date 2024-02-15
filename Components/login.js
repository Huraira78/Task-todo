
'use client'
import React from 'react'
import { useState, useEffect } from "react";

const LoginCom = () => {
  const [showHeader, setShowHeader] = useState(true);
  
  useEffect(() => {
      setShowHeader(false);
      console.log('<><><>',showHeader)
  }, []);
  return (
    <div>{showHeader?'Loginm':'Loginnnn'}</div>
  )
}

export default LoginCom



