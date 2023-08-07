import React from 'react'
import styles from '../styles/Job.module.css'

export default function Job() {
  return (
    <div className={styles.container}>
      <img src="/companies/scoot.png" alt="scoot company logo" className={styles.companyImage}/>
      <div className={styles.details}>
        <div className={styles.topDetails}>
          <p className={styles.timeAndRole}>5h ago <span>. </span>Full Time</p>
          <p className={styles.jobTitle}>Senior Software Engineer</p>
          <p className={styles.companyName}>Scoot</p>
        </div>
        <div className={styles.bottomDetails}>
          <p className={styles.location}>United Kingdom</p>
        </div>
      </div>
    </div>
    
  )
}
