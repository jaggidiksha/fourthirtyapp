import React from 'react';
import { useState ,useEffect} from 'react';

const Useeffect = () => {
    const [count,setcount]=useState(0)

    useEffect(()=>{
        //side effect: update the doc. title
        document.title=`you clicked ${count} times`
    },[count])
  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h1>this is Useeffect hook</h1>
        <p>you clicked {count} times</p>
        <h1>Timer : {count} seconds!</h1>
        <button onClick={()=>setcount(count+1)}>update count</button>
      </div>
    </div>
  )
}
export default Useeffect;

//useEffect:the useEffect hook in react js is used to perform the side effects in our function componennts. side effects cabn inculde data fetching, changing the dom etc . its  the equivalent of lifecycle methods like componentDidMount, componentDidUpdate, componentWillUnmount in class component


//basic usage of useEffect

//the useEffect hook takes two arguments 

//callback function: the function that contains the sideeffect logic

//dependency array: (optional)  an array of dependencies that when chnaged , trigger the effect to run , if the array is empty , the effect only runs once after the initial render 

//empty dependency array []: runs the effct only once after the initial render 

//dependencies in the array:runs the effect whenever the value in array changes

//no dependency array:the effect runs after each render 
