// import React from 'react'

// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }


// import React from 'react'

// function Home() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Home


import React from 'react';
import { useEffect } from 'react';

const Home = () => {
  useEffect(()=>{
    if(window.AOS){
      window.AOS.init()
    }
  },[])

  return (
  <>
<h1>  hello this is homepage</h1>
  <div style={{height:"100px",width:"200px",backgroundColor:"grey"}} data-aos="fade-up">

  </div>

  </>
  )
}

export default Home


