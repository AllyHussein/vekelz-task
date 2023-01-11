import React from 'react'
import "./Sidebar.css"
import Logo from "../../assets/Car Dashboard/logo.png"
import Dashboard from "../../assets/Car Dashboard/dashboard icon.png"
import Assets from "../../assets/Car Dashboard/icons/Doughnut/Line.png"
import Booking from "../../assets/Car Dashboard/icons/Car/Line.png"
import SellCars from "../../assets/Car Dashboard/icons/Shopping Bag/Line.png"
import BuyCars from "../../assets/Car Dashboard/icons/Shopping Cart/Line.png"
import Services from "../../assets/Car Dashboard/icons/Fencing/Line.png"
import Calender from "../../assets/Car Dashboard/icons/Calendar/Line.png"
import Messages from "../../assets/Car Dashboard/icons/Comment/Line.png"
import Settings from "../../assets/Car Dashboard/icons/Doughnut/Line.png"
import Logout from "../../assets/Car Dashboard/icons/Sign Out/Line.png"
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>
            <img src={Logo} alt='logo' />
            <h1>Motiv.</h1>
        </div>
        <div className='listContainer'>
            <div className='sidebarList1'>
                <div>
                  <img className='icon' src={Dashboard} alt='dash' />
                  <Link to="/Dashboard" style={{textDecoration : "none" , color: "#777" }}><span className='iconText'>Dashboard</span></Link>
                </div>
                <div>
                  <img className='icon' src={Assets} alt='dash' />
                  <span className='iconText'>Assets</span>
                </div>
                <div>
                  <img className='icon' src={Booking} alt='dash' />
                  <Link to="/" style={{textDecoration : "none" , color : "#777"}}>
                  <span className='iconText'>Booking</span>
                  </Link>
                  
                </div>
                <div>
                  <img className='icon' src={SellCars} alt='dash' />
                  <span className='iconText'>Sell Cars</span>
                </div>
                <div>
                  <img className='icon' src={BuyCars} alt='dash' />
                  <span className='iconText'>Buy Cars</span>
                </div>
                <div>
                  <img className='icon' src={Services} alt='dash' />
                  <span className='iconText'>Services</span>
                </div>
                <div>
                  <img className='icon' src={Calender} alt='dash' />
                  <span className='iconText'>Calender</span>
                </div>
                <div>
                  <img className='icon' src={Messages} alt='dash' />
                  <span className='iconText'>Messages</span>
                </div>
                
            </div>
            <div className='sidebarList2'>
                <div>
                  <img className='icon' src={Settings} alt='dash' />
                  <span className='iconText'>Settings</span>
                </div>
                <div>
                  <img className='icon' src={Logout} alt='dash' />
                  <span className='iconText'>Log out</span>
                </div>
            </div>
        </div>
    

    </div>
  )
}

export default Sidebar