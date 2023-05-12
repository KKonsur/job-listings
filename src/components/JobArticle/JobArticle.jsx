import React, { useEffect, useContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './JobArticle.module.scss'
import AppContext from '../../context/AppContext'

const JobArticle = ({ data }) => {
   const ctx = useContext(AppContext)
   const buttonsData = data.tools.concat(data.role, data.languages, data.level)

   const handleClick = (e) => {
      ctx.setFilters(e.target.textContent)
   }

   useEffect(() => {
      AOS.init()
   }, [])

   const buttons = buttonsData.map((name, index) => (
      <button key={index} onClick={handleClick} className={styles.btn}>
         <span>{name}</span>
      </button>
   ))

   return (
      <article className={styles['job-article']} data-aos='fade-up' data-aos-delay={`${data.id * 50}`} data-aos-once='true'>
         <div className={styles['job-info-wrapper']}>
            <div className={styles['job-info']}>
               <img src={data.logo} alt={`${data.company} logo`} />
               <div className={styles['text-section-wrapper']}>
                  <div className={styles['company-name-wrapper']}>
                     <h2 className={styles['company-name']}>{data.company}</h2>
                     {data.new && <span className={styles['job-new']}>New!</span>}
                     {data.featured && <span className={styles['job-featured']}>Featured</span>}
                  </div>
                  <h1 className={styles['job-position']}>{data.position}</h1>
                  <div className={styles['job-details']}>
                     <span>{data.postedAt}</span>
                     <span>{data.contract}</span>
                     <span>{data.location}</span>
                  </div>
               </div>
            </div>
            <div className={styles['job-buttons']}>{buttons}</div>
         </div>
      </article>
   )
}

export default JobArticle
