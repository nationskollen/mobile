/**
 * Returns a FlatList with checkboxes for filtering by nations
 * @category Home
 * @module NationFilter
 */
import React from 'react'
import { useFilter } from '../FilterContext'
import { Nation, useNations } from '@nationskollen/sdk'
import FilterFlatList from '../FilterFlatList'

const NationFilter = () => {
    const { filters, setFilters } = useFilter()
    const { data: nations } = useNations()
    if (!nations) return null

    const onPress = (item: Nation) => {
        setFilters({
            ...filters,
            nations: {
                ...filters.nations,
                [item.oid]: !filters.nations[item.oid],
            },
        })
    }

    return <FilterFlatList data={nations} onPress={onPress} checkedList={filters.nations} />
}

export default NationFilter
