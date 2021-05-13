/**
 * Returns a FlatList with checkboxes for filtering by student card requirements
 * @category Home
 * @module StudentFilter
 */
import React from 'react'
import { useFilter } from '../FilterContext'
import FilterFlatList from '../FilterFlatList'
import { useTranslation } from '../../../../translate/LanguageContext'

export interface StudentProp {
    name: string
    id: number
}

const StudentFilter = () => {
    const { filters, setFilters } = useFilter()
    const { translate } = useTranslation()

    const student = [
        { name: translate.filterStudent.needscard, id: 0 },
        { name: translate.filterStudent.needsmembership, id: 1 },
    ]

    const onPress = (item: StudentProp) => {
        setFilters({
            ...filters,
            student: {
                ...filters.student,
                [item.id]: !filters.student[item.id],
            },
        })
    }

    return <FilterFlatList data={student} onPress={onPress} checkedList={filters.student} />
}

export default StudentFilter
