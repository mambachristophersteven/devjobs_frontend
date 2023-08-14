import React from 'react'
import styles from '../styles/Top.module.css'

export default function Top() {
    const theme = ()=>{
        document.body.classList.toggle("dark-mode");
        document.getElementById('active-theme').classList.toggle(styles.notActive);
        document.getElementById('not-active-theme').classList.toggle(styles.notActive);
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
      <div className={styles.companyNameInfo}>
        <img src="/companies/scoot.svg" alt="company logo" className={styles.companyImage}/>
        <div className={styles.companyNameSite}>
          <div className={styles.companyName}>
            <p className={styles.name}>Scoot</p>
            <p className={styles.website}>scoot.com</p>
          </div>
          <div className={styles.companyLink}>
            <button className={styles.buttonLink}>Company Site</button>
          </div>
        </div>
      </div>
      <div className={styles.mobileCompanyNameInfo}>
        <img src="/companies/scoot.svg" alt="company logo" />
        <p className={styles.name}>Scoot</p>
        <p className={styles.website}>scoot.com</p>
        <button className={styles.buttonLink}>Company Site</button>
      </div>
    </div>
    
  )
}
