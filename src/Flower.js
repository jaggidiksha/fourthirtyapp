import React from 'react'

const Flower = (props) => {
  return (
    <div>
        <div class="card" style={{width:"18rem"}}>
  <img src={props.image}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      
    </div>
  )
}

export default Flower
