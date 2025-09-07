import React from 'react' 
import { useEffect, useRef } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Overview from '../pages/Overview'
import MasterData from '../pages/MasterData'
import Schedule from '../pages/Schedule'
import Countries from '../pages/Countries'


function Menu(props) {

  if(props.type == 1){
    return (
      <div>
          <div className="menu">
            <BrowserRouter>
              <nav>
                <div className="tabs">
                  <Link to='/Overview'>
                    <button type='button'>
                      <div className="text">Overview</div>
                      <i className="ri-eye-line"></i>
                    </button>
                  </Link>
                  <Link to='/MasterData'>
                    <button type='button'>
                      <div className="text">Master Data</div>
                      <i className="ri-bubble-chart-line"></i>
                    </button>
                  </Link>
                  <Link to='/Schedule'>
                    <button type='button'>
                      <div className="text">Schedule</div>
                      <i className="ri-calendar-line"></i>
                    </button>
                  </Link>
                  <Link to='/Countries'>
                    <button type='button'>
                      <div className="text">Countries</div>
                      <i className="ri-globe-line"></i>
                    </button>
                  </Link>                
                </div>
              </nav>
              <Routes>
                <Route path='/Overview' element={<Overview />} />
                <Route path='/MasterData' element={<MasterData />} />
                <Route path='/Schedule' element={<Schedule />} />
                <Route path='/Countries' element={<Countries/>} />
              </Routes>
            </BrowserRouter>
          </div>
      </div>
    )
  }
}

export default Menu