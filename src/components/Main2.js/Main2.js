import React from 'react'
import "./Main2.css"
import Energy from "../../assets/Car Dashboard (1)/tittle.png"
import Range from "../../assets/Car Dashboard (1)/tittle-1.png"
import PieChart from "../../assets/Car Dashboard (1)/pie chart.png"
import PieChart1 from "../../assets/Car Dashboard (1)/pie chart-1.png"
import PieChart2 from "../../assets/Car Dashboard (1)/Frame 3.png"
import PieChart3 from "../../assets/Car Dashboard (1)/Frame 4.png"
import Fluid from "../../assets/Car Dashboard (1)/Frame 20.png"
import Wear from "../../assets/Car Dashboard (1)/Frame 22.png"
import Graph from "../../assets/Car Dashboard (1)/graph.png"
import Graph1 from "../../assets/Car Dashboard (1)/graph-1.png"
import Button from "../../assets/Car Dashboard (1)/button.png"
import Top from "../../assets/Car Dashboard (1)/top.png"
import Top1 from "../../assets/Car Dashboard (1)/top-1.png"
import Top2 from "../../assets/Car Dashboard (1)/top-2.png"
import Car from "../../assets/Car Dashboard (1)/car.png"
import Car2 from "../../assets/Car Dashboard (1)/car2.png"
import Car3 from "../../assets/Car Dashboard (1)/car3.png"
import Left from "../../assets/Car Dashboard (1)/left.png"
import Left1 from "../../assets/Car Dashboard (1)/left-1.png"
import H from "../../assets/Car Dashboard (1)/h.png"
import H2 from "../../assets/Car Dashboard (1)/h2.png"

function Main2() {
  return (
    <div>
        <div className='cartsContainer'>
            <div className='dashCart1'>
                <img src={Energy} alt='energy' />
                <img src={PieChart} alt='pie' />
            </div>
            <div className='dashCart2'>
                <img src={Range} alt='energy' />
                <img src={PieChart1} alt='pie' />
            </div>
            <div className='dashCart2'>
                <img src={Fluid} alt='energy' />
                <img src={PieChart2} alt='pie' />
            </div>
            <div className='dashCart2'>
                <img src={Wear} alt='energy' />
                <img src={PieChart3} alt='pie' />
            </div>
        </div>
        <div className='charts'>
            <div className='chartsContainer2'>
                <h3>Miles <span style={{fontWeight : "normal"}}>Statistics</span></h3>
                <img className='img' src={Graph} alt='graph' />
            </div>
            <div className='chartsContainer2'>
                <h3>Car <span style={{fontWeight : "normal"}}>Statistics</span></h3>
                <div style={{display : "flex" , justifyContent : "space-between" , alignItems : "center" , margin : "10px"}}>
                    <span style={{color : "#777"}}>20 February 2022</span>
                    <img src={Button} alt='button' />
                </div>
                <img className='img' src={Graph1} alt='graph1' />
            </div>

        </div>
        <div className='cars'>
            <div className='car1'>
                <img style={{margin : "0 15px"}} src={Top} alt='top' />
                <img style={{margin : "0 15px"}} src={Car} alt='car' />
                <h4 style={{margin : "0 15px"}}>Mini Cooper</h4>
                <div style={{display : "flex", justifyContent : "space-between" , alignItems : "center" , margin : "15px"}}>
                    <img src={Left} alt='left' />
                    <img src={H} alt='h' />
                </div> 
            </div>
            <div className='car2'>
                <img style={{margin : "0 15px"}} src={Top1} alt='top' />
                <img style={{margin : "0 15px"}} src={Car2} alt='car' />
                <h4 style={{margin : "0 15px"}}>Porche 911 Carrera</h4>
                <div style={{display : "flex", justifyContent : "space-between" , alignItems : "center" , margin : "15px"}}>
                    <img src={Left1} alt='left' />
                    <img src={H2} alt='h' />
                </div> 
            </div>
            <div className='car3'>
                <img style={{margin : "0 15px"}} src={Top2} alt='top' />
                <img style={{margin : "0 15px"}} src={Car3} alt='car' />
                <h4 style={{margin : "0 15px"}}>Porche 911 Carrera</h4>
                <div style={{display : "flex", justifyContent : "space-between" , alignItems : "center" , margin : "15px"}}>
                    <img src={Left1} alt='left' />
                    <img src={H2} alt='h' />
                </div> 
            </div>

        </div>

    </div>
    
  )
}

export default Main2