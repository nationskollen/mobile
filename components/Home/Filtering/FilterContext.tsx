import React, { useState, useContext, createContext } from 'react'
import FilterCheckboxesType from './FilterCheckboxes'

export const FilterContext = createContext({} as FilterContextContract)
export const useFilter = () => useContext(FilterContext)

export interface FilterContextContract {
    filters: FilterCheckboxesType
    setFilters: React.Dispatch<React.SetStateAction<FilterCheckboxesType>>
}

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        nations: {},
        categories: {},
        student: {
            0: true,
            1: true,
        },
    })
    //student requirements have to be initialized with inversed values (start as unchecked)

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
    )
}
