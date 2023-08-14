import React from 'react'
import styles from '../styles/Details.module.css'
import Top from './Top'
import DetailsButton from './DetailsButton'

export default function Details() {
  return (
    <div className={styles.container}>
        <Top/>
        <div className={styles.body}>
          <div className={styles.title}>
            <div className={styles.info}>
              <p className={styles.timeAndRole}>5h ago <span><img src="/oval.png" alt="" /></span>Full Time</p>
              <p className={styles.jobTitle}>Senior Software Engineer</p>
              <p className={styles.location}>United Kingdom</p>
            </div>
            <DetailsButton text={'Apply Now'}/>
          </div>
          <div className={styles.jobDescriptionSection}>
            <p className={styles.jobDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pel
              lentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
              dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
              aoreet viverra, tortor libero sodales leo, eget blandit nunc
              tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate
              volutpat, eros pede semper 
              est, vitae luctus metus libero eu augue. Morbi purus libero,
              faucibus adipiscing,
              commodo quis, gravida id, est.
              Sed lectus. Praesent elementum hendrerit tortor. Sed semper
              lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, 
              eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>
          <div className={styles.requirementsSection}>
            <p className={styles.sectionHeading}>Requirements</p>
            <p className={styles.requirementText}>
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a 
              purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. 
              Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, 
              lacinia eu, vulputate vel, nisl.
            </p>
            <ul className={styles.requiremntList}>
              <li>Morbi interdum mollis sapien. Sed</li>
              <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
              <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
              <li>Morbi interdum mollis sapien. Sed</li>
            </ul>
          </div>
          <div className={styles.willDo}>
            <p className={styles.sectionHeading}>What You will do</p>
            <p className={styles.requirementText}>
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero,
              faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
              Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <ol className={styles.willDoList}>
              <li>Morbi interdum mollis sapien. Sed</li>
              <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
              <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
              <li>Morbi interdum mollis sapien. Sed</li>
            </ol>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <div className={styles.companyInfo}>
              <p className={styles.jobTitle}>Senior Software Engineer</p>
              <p className={styles.companyName}>So Digital Inc.</p>
            </div>
            <DetailsButton text={'Apply Now'}/>
          </div>
        </div>
    </div>
  )
}
