import React from 'react'
import styles from '../styles/Body.module.css'
import Button from './Button'

const Jobs = [
  {
    id: 1,
    image: "/companies/scoot.png",
    alt: "scoot company logo",
    posted: "5h ago",
    type: "Full Time",
    title: "Senior Software Engineer",
    company: "Scoot",
    location: "United Kingdom", 
  },
];

export default function Body() {
  return (
    <div className={styles.container}>
        <div className={styles.jobs}>
          {Jobs.map(Job=>(
            <div className={styles.jobContainer} key={Job.id}>
            <img src={Job.image} alt={Job.alt} className={styles.companyImage}/>
            <div className={styles.details}>
              <div className={styles.topDetails}>
                <p className={styles.timeAndRole}>{Job.posted} <span><img src="/oval.png" alt="" /></span>{Job.type}</p>
                <p className={styles.jobTitle}>{Job.title}</p>
                <p className={styles.companyName}>{Job.company}</p>
              </div>
              <div className={styles.bottomDetails}>
                <p className={styles.location}>{Job.location}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className={styles.load}>
            <Button text={'Load More'}/>
        </div>
    </div>
  )
}
