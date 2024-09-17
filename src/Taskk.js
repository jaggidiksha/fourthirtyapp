import React from 'react'
import { useState,useEffect } from 'react'

const Taskk = () => {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        //side effect: start a timer 
        setInterval(()=>{
setcount((precount)=>precount+1)
        },1000)
    },[])
  return (
    <div>
        <h1>Timer:{count}seconds!</h1>
      
    </div>
  )
}

export default Taskk
