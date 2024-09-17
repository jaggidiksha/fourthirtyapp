import React from 'react';
import { useRef } from 'react';

const Uncontrolled = () => {
    let inputref=useRef(null)
    let inputref2=useRef(null)

    function handlesubmit(e){
      e.preventDefault()
    console.log("first input value:",inputref.current.value)
    console.log("second input value:",inputref2.current.value)
   let c= document.getElementById("abc").value;
   console.log("third input value:",c)
    }
  return (
    <>
      <div style={{textAlign:"center"}}>
        <h2>UNCONTROLLED COMPONENTS</h2>
   <form onSubmit={handlesubmit}>
   <input type="text" ref={inputref}></input><br></br><br></br>
   <input type="text" ref={inputref2}></input><br></br><br></br>
   <input type="text" id="abc"></input><br></br><br></br>
   <button>submit</button>
   </form>
    </div>
    </>
  )
}

export default Uncontrolled;

//uncontrolled components : the components in which the input feilds are controlled / accessed using any other method than useState is called an uncontrolled components
