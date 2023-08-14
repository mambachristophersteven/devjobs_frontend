import React from 'react'
import styles from '../styles/DetailsButton.module.css'


export default function DetailsButton( {text}) {
  return (
    <button className={styles.container}>
        {text}
    </button>
  )
}
