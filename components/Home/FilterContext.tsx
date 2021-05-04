import React, { useState, useContext, createContext } from 'react'
import filterCheckboxesInitialState from './Filtering/FilterIntialState'
import FilterCheckboxesType from './Filtering/FilterCheckboxes'


export const FilterContext = createContext({} as FilterContextContract ) 
export const useFilter = () => useContext(FilterContext)

export interface FilterContextContract {
    filters : FilterCheckboxesType 
    setFilters: React.Dispatch<React.SetStateAction<FilterCheckboxesType>>

}

export const FilterProvider = ({children}) => {
    const [filters, setFilters] = useState({nations:{}, categories:{}, student:{}})

    return (
        <FilterContext.Provider 
            value={{ filters, setFilters }}
        >
            {children}
        </FilterContext.Provider>
    )
}