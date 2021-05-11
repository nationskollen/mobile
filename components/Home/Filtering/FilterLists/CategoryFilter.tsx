/**
 * Returns a FlatList with checkboxes for filtering by category
 * @category Home
 * @module CategoryFilter
 */
import React from 'react'
import { useFilter } from '../FilterContext'
import FilterFlatList from '../FilterFlatList'
import { Category, useCategories } from '@nationskollen/sdk'

const CategoryFilter = () => {
    const { filters, setFilters } = useFilter()
    const { data: categories } = useCategories()
    if (!categories) return null

    const onPress = (item: Category) => {
        setFilters({
            ...filters,
            categories: {
                ...filters.categories,
                [item.id]: !filters.categories[item.id],
            },
        })
    }

    return (
        <FilterFlatList
            data={categories}
            onPress={onPress}
            checkedList={filters.categories}
            needsTranslate={true}
        />
    )
}

export default CategoryFilter
