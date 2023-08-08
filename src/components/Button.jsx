import React from 'react'
import styles from '../styles/Button.module.css'

export default function Button( {text} ) {
  return (
    <button className={styles.container}>
        {text}
    </button>
  )
}
