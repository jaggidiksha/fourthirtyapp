import React from 'react';
import { useState } from 'react';

const Controlled = () => {

    const [val,setval]=useState("hello")

    const[item,setitem]=useState("hii")
  return (
    <div style={{textAlign:"center"}}>
        <h1>CONTROLLED COMPONENTS </h1>
        <input type="text"  value={val}  onChange={(e)=>setval(e.target.value)}></input><br></br><br></br>
        <input type="text"  value={item} onChange={(e)=>setitem(e.target.value)}></input><br></br><br></br>
        <h1>value:{val}</h1>
        <h1>item:{item}</h1>
      
    </div>
  )
}

export default Controlled;

//controlled components:
// whenever we control /manipulate/access/ change the values of the input fields with the help of usestate hook  then that component will be called as a controlled component