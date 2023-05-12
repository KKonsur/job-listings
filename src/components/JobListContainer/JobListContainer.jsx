import React, { useContext } from 'react'
import JobArticle from '../JobArticle/JobArticle'
import styles from './JobListContainer.module.scss'
import AppContext from '../../context/AppContext'

const JobListContainer = ({ data }) => {
   const ctx = useContext(AppContext)
   const filteredJobs = data.filter((job) =>
      ctx.filters.every(
         (filter) => job.tools.includes(filter) || job.languages.includes(filter) || job.role === filter || job.level === filter
      )
   )
   const jobList = filteredJobs.map((job) => <JobArticle key={job.id} data={job} />)
   return <main className={styles['job-list']}>{jobList}</main>
}

export default JobListContainer
