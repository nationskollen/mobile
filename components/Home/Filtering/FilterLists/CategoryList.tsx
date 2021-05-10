/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterListNation
 */
import React from 'react'
import { FlatList, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useFilter } from '../FilterContext'
import { useTheme } from '../../../ThemeContext'
import ContentContainer from '../../../Common/ContentContainer'
import { CategoryCollection } from '@nationskollen/sdk'

interface Props {
    categories: CategoryCollection
}

const FilterListCategory = ({ categories }: Props) => {
    const { filters, setFilters } = useFilter()
    const { colors } = useTheme()

    if (!categories) return null

    console.log(categories)

    return (
        <FlatList
            data={categories}
            renderItem={({ item }) => (
                <ContentContainer direction={'row'}>
                    <CheckBox
                        center
                        checkedColor={colors.primary}
                        size={24}
                        title={<Text style={{ flex: 1, color: colors.text }}>{item.name}</Text>}
                        containerStyle={{
                            height: '85%',
                            width: '95%',
                            backgroundColor: colors.backgroundExtra,
                            borderRadius: 10,
                            borderColor: colors.border,
                        }}
                        iconRight
                        onPress={() => {
                            setFilters({
                                ...filters,
                                categories: {
                                    ...filters.categories,
                                    [item.id]: !filters.categories[item.id],
                                },
                            })
                        }}
                        checked={!filters.categories[item.id]}
                    />
                </ContentContainer>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default FilterListCategory
