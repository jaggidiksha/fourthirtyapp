import React from 'react';
import { useContext } from 'react';
import Mycontext from './Mycontext';

const Mycomponent = () => {
    const contextvalue=useContext(Mycontext)
  return (
    <div>
        <p>{contextvalue}</p>
      
    </div>
  )
}

export default Mycomponent
