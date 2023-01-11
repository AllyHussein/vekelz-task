import React from 'react'
import "./Main.css"
import Arrow from "../../assets/Car Dashboard/icon/stroke/downward.png"
import Filter from "../../assets/Car Dashboard/filter.png"
import Dashboard from "../../assets/Car Dashboard/icon.png"
import Cars from '../Cars/Cars'
function Main() {
  return (
    <div className='main'>
        <h1>Booking</h1>
        <div className='parent'>
            <div style={{display : "flex" , justifyContent : "space-between" , alignItems : "center"}}>
                <div className='selectContainer'>
                        <select className='select' name="recent" id="recent">
                          <option value="New">New</option>
                          <option value="Old">Old</option>
                        </select>
                        <img className='arrow' src={Arrow} alt='arrow' />
                </div>
                <div className='selectContainer'>
                        <select className='select' name="cars" id="cars" form="carform">
                          <option value="volvo">Toyota</option>
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                          <option value="audi">Audi</option>
                        </select>
                        <img className='arrow' src={Arrow} alt='arrow' />
                </div>

            </div>
            
            <div style={{display : "flex" , alignItems : "center"}}>
                    <img src={Dashboard} alt='dash'  />
                    <img src={Filter} alt='filter'   />
            </div>
        
        </div>
            
            
        <Cars />
        
    </div>
  )
}

export default Main