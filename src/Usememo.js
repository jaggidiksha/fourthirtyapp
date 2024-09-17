import React from 'react';
import { useState ,useMemo} from 'react';

const Usememo = () => {
    const [count,setcount]=useState(0)
    const [item,setitem]=useState(10)


    const multicountmemo=useMemo(
        function multicount(){
            console.log("check rerendering ")
            return count*5
        },[count]
    )


  return (
<>
<div style={{textAlign:"center"}}>
    <h1>USEMEMO HOOK</h1>
    <h2>count:{count}</h2>
    <h2>item:{item}</h2>
    <h3>{multicountmemo}</h3>
    <button onClick={()=>setcount(count+1)}>update count</button>
    <button onClick={()=>setitem(item*10)}>upadte item</button>


</div>
</>
  )
}

export default Usememo
