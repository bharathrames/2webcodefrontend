import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar'


export function PortalLayouts() {
  return (
     <div id="wrapper">
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar/>
      
      <Outlet/> 
    </div>
  </div>
</div>

  )
}

export default PortalLayouts