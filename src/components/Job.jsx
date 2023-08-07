import React from 'react'

export default function Job() {
  return (
    <div className='company-box'>
      <img src="/companies/scoot.png" alt="scoot company logo" className='logo'/>
      <div className="details">
        <div className="top-details">
          <p className='time-and-role'>5h ago <span>. </span>Full Time</p>
          <p className="job-title">Senior Software Engineer</p>
          <p className="company-name">Scoot</p>
        </div>
        <div className="bottom-details">
          <p className="location">United Kingdom</p>
        </div>
      </div>
    </div>
    
  )
}
