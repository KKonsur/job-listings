import { createContext, useState } from 'react'

const AppContext = createContext({
   filters: [],
   setFilters: () => {},
})

export const AppContextProvider = (props) => {
   const [filters, setFilters] = useState([])

   const filtersHandler = (filter) => {
      if (!filters.includes(filter)) {
         setFilters([...filters, filter])
      }
   }

   const removeFiltersHandler = (filter) => {
      if (filters.includes(filter)) {
         setFilters(filters.filter((filterName) => filterName !== filter))
      } else {
         setFilters([...filters, filter])
      }
   }

   const clearFiltersHandler = () => {
      setFilters([])
   }

   return (
      <AppContext.Provider
         value={{ filters, setFilters: filtersHandler, removeFilters: removeFiltersHandler, clearFilters: clearFiltersHandler }}>
         {props.children}
      </AppContext.Provider>
   )
}
export default AppContext
