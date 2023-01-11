import React from 'react'
import Header2 from '../Header2/Header2'
import Main2 from '../Main2.js/Main2'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import "./Dashboard.css"
function Dashborad() {
  return (
    <>
      <Header2 />
      <div className='bar'>
        <Sidebar />
        <div className='barChild'>
          <Navbar />
          <Main2 />
        </div>
      </div>

    </>
  )
}

export default Dashborad