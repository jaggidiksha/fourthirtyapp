import React from 'react';
import { useState } from 'react';

const Usestate = () => {

    const[count,setcount]=useState(10)
    // function change(){
    //     setcount(count+1)
    // }

    const change=()=>{
        setcount(count*8)
    }

  return (
    <>
    <div style={{textAlign:"center"}}>
        <h1>Usestate hook</h1>
        <h2>count:{count}</h2>
        <button onClick={change}>update count</button>

    </div>
    </>
  )
}

export default Usestate ;

// hook: predefined functions used to perform different functionalities in the function based components of react
//useState hook :it has two states 
//initial state 
//updated state /setter function 

//rules :
//1 hook should always be imported at the top level only 
//2 to check the actions / functionalities of  hooks we have to perform an event


//we initially have  a div with background color (red) and some height width,below that we have a button and it says clickme to change the  color ,as we click on the button  the background-color of the div will be changed to yellow and the text of the button willbe changed to AWESOME!
