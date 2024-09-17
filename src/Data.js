import React from 'react'

const Data = () => {
    const items=[1,2,3,4,5]
  return (
    <div>
    <ul>
    {items.map((item)=>(
        <li key={item}>{item*2}</li>
      ))}
    </ul>
    </div>
  )
}

export default Data
