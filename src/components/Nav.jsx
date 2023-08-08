import React from 'react'
import styles from '../styles/Nav.module.css';
import Button from './Button';

export default function Nav() {


  const theme = ()=>{
    document.body.classList.toggle("dark-mode");
    document.getElementById('active-theme').classList.toggle('notActive');
    document.getElementById('not-active-theme').classList.toggle('notActive');
  }

  const check = () =>{
    let uncheckedbox =  document.getElementById('unchecked');
    let checkedbox =  document.getElementById('checked');
    checkedbox.style.display = 'flex';
    uncheckedbox.style.display = 'none';
  }
  const uncheck = () =>{
    let uncheckedbox =  document.getElementById('unchecked');
    let checkedbox =  document.getElementById('checked');
    checkedbox.style.display = 'none';
    uncheckedbox.style.display = 'flex';
  }
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="" />
          </div>
          <div className={styles.toggler}>
            <img src="/sun.svg" alt="sun"/>
            <div className={styles.toggleButton} onClick={theme}>
              <div className={styles.active} id='active-theme'></div>
              <div className={styles.notActive} id='not-active-theme'></div>
            </div>
            <img src="/moon.svg" alt="moon" />
          </div>
        </div>
        <div className={styles.searchbar}>
          <div className={styles.searchCompany}>
            <img src="/search.svg" alt="search-icon" />
            <input type="text" id='companyName' placeholder='Filter by title, companies, expertise…'/>
          </div>
          <div className={styles.searchLocation}>
            <img src="/location.svg" alt="" />
            <input type="text" id='companyName' placeholder='Filter by location…'/>
          </div>
          <div className={styles.searchFulltime}>
            <div className={styles.checkbox}>
              <div className={styles.unchecked} id='unchecked' onClick={check}></div>
              <div className={styles.check} id='checked' onClick={uncheck}>
                <img src="/check.svg" alt="" />
              </div>
              <p className={styles.fulltime}>Full Time Only</p>
            </div>
            <Button text={'Search'}/>
          </div>
        </div>
    </div>
  )
}
