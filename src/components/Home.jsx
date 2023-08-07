import React from 'react'
import '../styles/Home.css'
import Nav from './Nav'
import Body from './Body'
export default function Home() {
  return (
    <div className="home">
        <Nav/>
        <Body/>
    </div>
  )
}
