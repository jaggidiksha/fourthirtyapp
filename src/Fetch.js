import React, { useState } from 'react';
import { useEffect } from 'react';

const Fetch = () => {


    const [data,setdata]=useState([])
    const[loading,setloading]=useState(true)
    useEffect(()=>{
        //side effect
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((data)=>{
setdata(data)
setloading(false)
        })
    },[])

    if(loading){
        return <div>loading.....</div>
    }
  return (
    <div>
        <h1>Posts</h1>
     <ul>
     {data.map((post)=>(

       <li key={post.id}>{post.title}</li> 
))}
     </ul>
    </div>
  )
}

export default Fetch
//key : key is a special prop in react js which is used to uniquely identify each item in a list if items(post object), it is used to see which item in the list has been changed or removed or updated
