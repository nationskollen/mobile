/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterFlatList
 */
import React from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CheckBox } from 'react-native-elements'
import { useTheme } from '../../ThemeContext'
import NationLogo from '../../Nations/Front/NationLogo'
import { CategoryCollection, NationCollection } from '@nationskollen/sdk'
import ContentContainer from '../../Common/ContentContainer'
import { useTranslation } from '../../../translate/LanguageContext'
import { StudentProp } from './FilterLists/StudentFilter'
import { CategoryIcon } from './FilterListIcons'

interface Props {
    data: NationCollection | CategoryCollection | Array<StudentProp>
    onPress: (filterListItem: object) => void
    checkedList: object
    needsTranslation?: Boolean
}

const FilterFlatList = ({ data, onPress, checkedList, needsTranslation }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const { translate } = useTranslation()

    return (
        <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={data}
            renderItem={({ item }) => (
                <CheckBox
                    size={24}
                    checkedColor={colors.primary}
                    title={
                        <>
                            {item?.icon_img_src ? (
                                <NationLogo src={item?.icon_img_src} size={30} spacing={0} />
                            ) : (
                                <CategoryIcon category={item.name} />
                            )}
                            <Text
                                style={{
                                    flex: 1,
                                    color: colors.text,
                                    marginLeft: 20,
                                    fontWeight: '700',
                                }}
                            >
                                {/* Categories need translation */}
                                {needsTranslation ? translate.filterCategory[item.name] : item.name}
                            </Text>
                        </>
                    }
                    containerStyle={{
                        height: 60,
                        width: '95%',
                        backgroundColor: colors.backgroundExtra,
                        borderRadius: 10,
                        borderColor: colors.border,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                    iconRight
                    onPress={() => onPress(item)}
                    checked={!checkedList[item?.oid ?? item?.id]}
                />
            )}
            keyExtractor={(item) => (item?.oid ?? item?.id).toString()}
            fadingEdgeLength={30}
        />
    )
}

export default FilterFlatList
