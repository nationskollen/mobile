/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterListNation
 */
import React from 'react'
import { FlatList, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useTheme } from '../../../ThemeContext'
import { useFilter } from '.././FilterContext'
import NationLogo from '../../../Nations/Front/NationLogo'
import { NationCollection } from '@nationskollen/sdk'
import ContentContainer from '../../../Common/ContentContainer'

interface Props {
    nations: NationCollection
}

const NationList = ({ nations }: Props) => {
    const { filters, setFilters } = useFilter()
    const { colors } = useTheme()
    return (
        <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={nations}
            renderItem={({ item }) => (
                <ContentContainer
                    direction={'row'}
                    style={{
                        alignItems: 'center',
                        paddingVertical: 5,
                        backgroundColor: colors.background,
                    }}
                >
                    <NationLogo src={item?.icon_img_src} />
                    <CheckBox
                        size={24}
                        checkedColor={colors.primary}
                        title={<Text style={{ flex: 1, color: colors.text }}>{item.name}</Text>}
                        containerStyle={{
                            height: '85%',
                            width: '85%',
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
                                    [item.oid]: !filters.nations[item.oid],
                                },
                            })
                        }}
                        checked={!filters.nations[item.oid]}
                    />
                </ContentContainer>
            )}
            keyExtractor={(item) => item.oid.toString()}
        />
    )
}

export default NationList
