import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <>
 <div className="w3-bar w3-green">
 <Link to="/home" className="w3-bar-item w3-button" >Home</Link>
 <Link to="/exercise" className="w3-bar-item w3-button" >Exercise</Link>
 <Link to="/trafficLight" className="w3-bar-item w3-button" >TrafficLight</Link>
</div>
    </>
  )
}
export default Nav