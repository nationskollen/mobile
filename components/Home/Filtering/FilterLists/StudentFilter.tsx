/**
 * Returns a FlatList with checkboxes for filtering by student card requirements
 * @category Home
 * @module StudentFilter
 */
import React from 'react'
import { useFilter } from '../FilterContext'
import FilterFlatList from '../FilterFlatList'

interface studentProp {
    name: string
    id: number
}

const student = [
    { name: 'Nationskort krävs', id: 0 }, //add dynamic name
    { name: 'Medlemskap krävs', id: 1 }, //add dynamic name
]

const StudentFilter = () => {
    const { filters, setFilters } = useFilter()

    const onPress = (item: studentProp) => {
        setFilters({
            ...filters,
            student: {
                ...filters.student,
                [item.id]: !filters.nations[item.id],
            },
        })
    }

    return <FilterFlatList data={student} onPress={onPress} checkedList={filters.student} />
}

export default StudentFilter
