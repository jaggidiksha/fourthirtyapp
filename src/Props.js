import React from 'react'

const Props = (props) => {
  return (
    <div>

<div class="card" >
  <img src={props.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      
    </div>
  )
}

export default Props
