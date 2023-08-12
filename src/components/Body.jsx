import React from 'react'
import styles from '../styles/Body.module.css'
import Button from './Button'

const Jobs = [
  {
    id: 1,
    image: "/companies/scoot.png",
    alt: "scoot logo",
    posted: "5h ago",
    type: "Full Time",
    title: "Senior Software Engineer",
    company: "Scoot",
    location: "United Kingdom", 
  },
  {
    id: 2,
    image: "/companies/blogr.png",
    alt: "blogr logo",
    posted: "20h ago",
    type: "Part Time",
    title: "Haskell and Purescript Dev",
    company: "Blogr",
    location: "United States", 
  },
  {
    id: 3,
    image: "/companies/vector.png",
    alt: "vector logo",
    posted: "1d ago",
    type: "Part Time",
    title: "Midlevel Back End Engineer",
    company: "Vector",
    location: "Russia", 
  },
  {
    id: 4,
    image: "/companies/office-lite.png",
    alt: "office lite logo",
    posted: "2d ago",
    type: "Full Time",
    title: "Senior Applications Engineer",
    company: "Office Lite",
    location: "Japan", 
  },
  {
    id: 5,
    image: "/companies/pod.png",
    alt: "pod logo",
    posted: "2d ago",
    type: "Part Time",
    title: "Remote DevOps Engineer",
    company: "Pod",
    location: "Thailand", 
  },
  {
    id: 6,
    image: "/companies/creative.png",
    alt: "creative logo",
    posted: "4d ago",
    type: "Part Time",
    title: "Desktop Support Manager",
    company: "Creative",
    location: "Germany", 
  },
  {
    id: 7,
    image: "/companies/pomodoro.png",
    alt: "pomodoro logo",
    posted: "1w ago",
    type: "Full Time",
    title: "IOS Engineer",
    company: "Pomodoro",
    location: "United States", 
  },
  {
    id: 8,
    image: "/companies/maker.png",
    alt: "maker logo",
    posted: "1w ago",
    type: "Full Time",
    title: "Senior EJB Developer",
    company: "Maker",
    location: "United Kingdom", 
  },
  {
    id: 9,
    image: "/companies/coffeeroasters.png",
    alt: "coffeeroasters logo",
    posted: "1w ago",
    type: "Part Time",
    title: "Senior Frontend Developer",
    company: "Coffeeroasters",
    location: "Singapore", 
  },
  {
    id: 10,
    image: "/companies/mastercraft.png",
    alt: "masterkraft logo",
    posted: "2w ago",
    type: "Freelance",
    title: "Apps & Website Designer",
    company: "Masterkraft",
    location: "United States", 
  },
  {
    id: 11,
    image: "/companies/crowdfund.png",
    alt: "crowdfund logo",
    posted: "1mo ago",
    type: "Part Time",
    title: "Fullstack Developer",
    company: "Crowdfund",
    location: "New Zealand", 
  },
  {
    id: 12,
    image: "/companies/typemaster.png",
    alt: "typemaster logo",
    posted: "4d ago",
    type: "Part Time",
    title: "Technical Lead Engineer",
    company: "Typemaster",
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
