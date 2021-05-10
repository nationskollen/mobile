/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterListNation
 */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useFilter } from '.././FilterContext'
import { useTheme } from '../../../ThemeContext'
import ContentContainer from '../../../Common/ContentContainer'

interface Props {
    student: Array<string>
}

const FilterListStudent = ({ student }: Props) => {
    const { filters, setFilters } = useFilter()
    const { colors } = useTheme()

    return (
        <FlatList
            data={student}
            renderItem={({ item }) => (
                <ContentContainer direction={'row'}>
                    {/* <NationLogo src={item?.icon_img_src} /> */}
                    <CheckBox
                        center
                        checkedColor={colors.primary}
                        size={24}
                        title={<Text style={{ flex: 1, color: colors.text }}>{item}</Text>}
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
                                nations: {
                                    ...filters.nations,
                                    [item]: !filters.nations[item],
                                },
                            })
                        }}
                        checked={filters.nations[item]}
                    />
                </ContentContainer>
            )}
            keyExtractor={(item) => item}
        />
    )
}

export default FilterListStudent
