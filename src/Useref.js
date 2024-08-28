import React from 'react';
import { useRef } from 'react';

const Useref = () => {
    let inputref=useRef()

    const handleinput=()=>{
        inputref.current.value="4000";
        inputref.current.focus();
        inputref.current.style.color="red"
        inputref.current.style.backgroundColor="black"
    }

  return (
    <>
    <div style={{textAlign:"center"}}>
        <h1>Useref hook</h1>
        <input type="text" ref={inputref}></input>
        <br></br><br></br>
        <button onClick={handleinput}>clickme!</button>

    </div>
    
    </>
  )
}

export default Useref;
