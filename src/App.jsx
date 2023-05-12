import React, { useContext } from 'react'
import styles from './App.module.scss'
import data from './data.json'
import JobListContainer from './components/JobListContainer/JobListContainer'
import Filters from './components/Filters/Filters'
import AppContext from './context/AppContext'

const App = () => {
   const ctx = useContext(AppContext)
   return (
      <div className={styles['app-container']}>
         <header className={styles.header}>{ctx.filters.length > 0 && <Filters />}</header>
         <JobListContainer data={data} />
      </div>
   )
}

export default App
