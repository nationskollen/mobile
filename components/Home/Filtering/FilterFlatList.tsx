/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterFlatList
 */
import React from 'react'
import { FlatList, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useTheme } from '../../ThemeContext'
import NationLogo from '../../Nations/Front/NationLogo'
import { CategoryCollection, NationCollection } from '@nationskollen/sdk'
import ContentContainer from '../../Common/ContentContainer'

interface Props {
    data: NationCollection | CategoryCollection | Array<any> // it's not happy without this generic type?
    onPress: (arg0: object) => void
    checkedList: object
}

const FilterFlatList = ({ data, onPress, checkedList }: Props) => {
    const { colors } = useTheme()

    return (
        <FlatList
            contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}
            data={data}
            renderItem={({ item }) => (
                <ContentContainer
                    direction={'row'}
                    style={{
                        alignItems: 'center',
                        paddingVertical: 1,
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
                        onPress={() => onPress(item)}
                        checked={!checkedList[item?.oid ?? item?.id]}
                    />
                </ContentContainer>
            )}
            keyExtractor={(item) => (item?.oid ?? item?.id).toString()}
        />
    )
}

export default FilterFlatList