import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import "./Booking.css"
function Booking() {
  return (
    <>
      <Header />
      <div className='bar'>
        <Sidebar />
        <div className='barChild'>
          <Navbar />
          <Main />
        </div>
      </div>

    </>
  )
}

export default Booking