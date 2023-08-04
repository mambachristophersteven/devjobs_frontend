import React from 'react'
import '../styles/Button.css'

export default function Button( {text} ) {
  return (
    <button className='button'>
        {text}
    </button>
  )
}
