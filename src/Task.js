import React from 'react';
import { useRef } from 'react';

const Task = () => {

    let ref=useRef(0)

    function handleinput(){
    
ref.current=ref.current+1;
        alert("you clicked"+ref.current+"times!")
    }

  return (
   <>
 <div style={{textAlign:"center"}}>
 <h1>in this known how much times you have clicked</h1>
 <button onClick={handleinput}>Click me!</button>
 </div>
   </>
  )
}

export default Task
