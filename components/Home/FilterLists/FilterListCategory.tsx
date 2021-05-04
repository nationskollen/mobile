/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterListNation
 */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { CheckBox, colors } from 'react-native-elements'
import { useFilter } from '.././FilterContext'
import { useTheme } from '../../ThemeContext'
import ListButton from '../../ListButton'
import NationLogo from '../../Nations/NationLogo'
import { NationCollection } from '@dsp-krabby/sdk'
import ContentContainer from '../../ContentContainer'
import { filterStyles } from '../FilterButtons'

interface Props{
    categories: Array<string>
}

const FilterListCategory= ({ categories }: Props) => {
    const { filters, setFilters} = useFilter()
    const { colors } = useTheme()

    return (
        <FlatList
            data={categories}
            renderItem={({ item }) => (
                <ContentContainer direction={'row'}>
                    {/* <NationLogo src={item?.icon_img_src} /> */}
                    <CheckBox
                            center
                            checkedColor = { colors.primary }
                            size = {24}
                            title = {<Text style = {{flex : 1, color : colors.background}}>{item}</Text>}
                            containerStyle={{width:'85%', backgroundColor : colors.background, borderColor: colors.border}}
                            iconRight
                            onPress={()=>{
                                    setFilters({
                                        ...filters,
                                        nations: {
                                                ...filters.nations,
                                                [item]: !filters.nations[item]
                                        }
                                    })
                                }}
                            checked = {!filters.nations[item]}
                    />
                </ContentContainer>
            )}
            keyExtractor={(item) => item}
        />
    )
}

export default FilterListCategory
