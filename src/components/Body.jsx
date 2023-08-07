import React from 'react'
import Job from './Job'
import styles from '../styles/Body.module.css'

export default function Body() {
  return (
    <div className={styles.container}>
        <Job/>
    </div>
  )
}
