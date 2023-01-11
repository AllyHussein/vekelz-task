import React from 'react'
import "./Cars.css"
import Cars1 from "../../assets/Car Dashboard/1.png"
import Cars2 from "../../assets/Car Dashboard/2.png"
import Cars3 from "../../assets/Car Dashboard/3.png"
function Cars({cars}) {
  return (
    <div className='carsContainer'>
        <img src={Cars1} alt='cars1' />
        <img src={Cars2} alt='cars2' />
        <img src={Cars3} alt='cars3' />
    </div>
  )
}

export default Cars