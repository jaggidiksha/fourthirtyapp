import React from 'react';;
import { useState,useEffect } from 'react';

const Useeffect1 = () => {
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        //side effect:fetch API
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response)=>response.json())
      .then((data)=>{
        setdata(data)
        setloading(false)
      })
      .catch((error)=>{console.log("error fetching data",error)})
    },[])//empty dependency array ensures that the effect runs once after the initial render 

    if (loading){
        return <div>Loading.....</div>
    }
  return (
    <div>
        <h1>POSTS</h1>
        <ul>
            {data.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default Useeffect1

//map function: map function is used to render the list of items based on the data fetched from the API
//how map function works :the map function in js is used to create a new array by applying a function to each element of the original array 
//in this case its used to tranform each post object in the data into the li 

//{data.map((post)=>{........}}
//data:data is an array that holds the fetched data from API

//map function iterate over each element (in this case it is post object )

//key ={post.id}
//key is a special prop in react that helps us to uniquely identity the li elements , or whih li element is changed or been added or removed
//