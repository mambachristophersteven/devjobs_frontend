import React from 'react'
import Job from './Job'
import styles from '../styles/Body.module.css'
import Button from './Button'

export default function Body() {
  return (
    <div className={styles.container}>
        <div className={styles.jobs}>
            <Job/>
        </div>
        <div className={styles.load}>
            <Button text={'Load More'}/>
        </div>
    </div>
  )
}
