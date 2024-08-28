import React, { useRef } from 'react';
import { useState,useEffect } from 'react';

const Useeffect = () => {
    const[count,setcount]=useState(0)

    useEffect(()=>{

        document.title=`you clicked ${count} times`

    },[])

  return (
    <div>
        <h1>Useeffect hook</h1>
        <h1>you clicked {count} times</h1>
        <button onClick={()=>setcount(count+1)}>update count</button>
      
    </div>
  )
}

export default Useeffect
