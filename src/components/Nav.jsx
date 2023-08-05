import React from 'react'
import '../styles/Nav.css';
import Button from './Button';

export default function Nav() {

  const theme = ()=>{
    document.body.classList.toggle("dark-mode");
    document.getElementById('active-theme').classList.toggle('not-active');
    document.getElementById('not-active-theme').classList.toggle('not-active');
  }
  return (
    <div className='container'>
        <div className="top">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="toggler">
            <img src="/sun.svg" alt="sun"/>
            <div className="toggle-button" onClick={theme}>
              <div className='active' id='active-theme'></div>
              <div className='not-active' id='not-active-theme'></div>
            </div>
            <img src="/moon.svg" alt="moon" />
          </div>
        </div>
        <div className="searchbar">
          <div className="searchCompany">
            <img src="/search.svg" alt="search-icon" />
            <input type="text" id='companyName' placeholder='Filter by title, companies, expertise…'/>
          </div>
          <div className="searchLocation">
            <img src="/location.svg" alt="" />
            <input type="text" id='companyName' placeholder='Filter by location…'/>
          </div>
          <div className="searchFulltime">
            <div className="checkbox">
              <input type="checkbox" name="fullTime" id="fullTime" />
              <p className='fulltime'>Full Time Only</p>
            </div>
            <Button text={'Search'}/>
          </div>
        </div>
    </div>
  )
}
