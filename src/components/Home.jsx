import React from 'react'
import styles from '../styles/Home.module.css'
import Nav from './Nav'
import Body from './Body'
export default function Home() {
  return (
    <div className={styles.container}>
        <Nav/>
        <Body/>
    </div>
  )
}
