import React from 'react'
import { useLocation } from 'react-router-dom'

const Sub = () => {

let lm = useLocation()
const{name , emial , pass}=lm.state||{}

  return (
<>
<h1>{name}</h1>
</>  
)
}

export default Sub