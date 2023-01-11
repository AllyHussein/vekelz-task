import React from 'react'
import "./Navbar.css"
import Avatar from "../../assets/Car Dashboard/Mask group.png"
import Notification from "../../assets/Car Dashboard/notification.png"
function Navbar() {
  return (
    <div className='navbar'>
        <input className='search' type='text'placeholder='Search or Type' />
        <div className='notpro'>
            <img src={Notification} alt='notification' />
            <img className='avatar' src={Avatar} alt='profile' />
        </div>
    </div>
  )
}

export default Navbar