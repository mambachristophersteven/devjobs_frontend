import React from 'react'
import '../styles/Nav.css';

export default function Nav() {
  return (
    <div className='container'>
        <div className="top">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="toggler">
            <img src="/sun.svg" alt="sun"/>
            <div className="toggle-button">
              <div className='active'></div>
              <div className='not-active'></div>
            </div>
            <img src="/moon.svg" alt="moon" />
          </div>
        </div>
        <div className="searchbar">
          <div className="searchCompany">
            <input type="text" id='companyName'/>
          </div>
          <div className="searchLocation">
            <input type="text" id='companyName'/>
          </div>
          <div className="searchFulltime">
            <input type="checkbox" name="fullTime" id="fullTime" />
          </div>
        </div>
    </div>
  )
}
