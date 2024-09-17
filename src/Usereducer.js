import React from 'react';
import { useReducer } from 'react';

const reducer=(state,action)=>{
switch(action.type){
    case 'INCREMENT':return {count:state.count+1}

    case 'DECREMENT':return {count:state.count-1}

    default:return state
}
}

const Usereducer = () => {
    //const [initil state, update state]=useState(initial state value)
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div style={{textAlign:"center"}}>
        <h1>usereducer hook</h1>
        <h2>count:{state.count}</h2>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </div>
  )
}

export default Usereducer;
//usereducer : it is also a state management hook in reactjs which is used when we have more complex state logics, in usereducer hook we have a reducer function which is responsible for managing the state of our application
//reducer function takes two parameters:
//state : state is initail state of our application
//action :describes the type of action that occured , usually it is an object with the type property
