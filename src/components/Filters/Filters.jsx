import React, { useContext } from 'react'
import styles from './Filters.module.scss'
import AppContext from '../../context/AppContext'
const Filters = () => {
   const ctx = useContext(AppContext)

   const clickHandler = (e) => {
      ctx.removeFilters(e.target.textContent)
   }
   const filters = ctx.filters.map((filter, index) => (
      <button className={styles.btn} onClick={clickHandler} key={index}>
         {filter}
      </button>
   ))

   return (
      <div className={styles.filters}>
         <div className={styles['filters-buttons']}>{filters}</div>
         <button className={styles['clear-filters-button']} onClick={() => ctx.clearFilters()}>
            Clear
         </button>
      </div>
   )
}

export default Filters
