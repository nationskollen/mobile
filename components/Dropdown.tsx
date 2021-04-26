/**
 * @category Misc
 * @module Dropdown
 */

import { View } from 'react-native'
import React, { useState } from 'react'

import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import ListButton from './ListButton'

interface Props {
    title: string
    expandComponent: Element
    icon: Element
}

/**
 * This component renders an expandable dropdown menu header
 */
export const Dropdown: React.FC<Props> = ({ title, expandComponent, icon }) => {
    const { colors } = useTheme()
    const [expand, setExpand] = useState(false)

    return (
        <View>
            <ListButton
                title={title}
                onPress={() => setExpand(!expand)}
                leftIcon={icon}
                rightIcon={
                    <Ionicons
                        name={expand ? 'chevron-up' : 'chevron-down'}
                        size={24}
                        color={colors.text}
                        onPress={() => setExpand(!expand)}
                    />
                }
            />

            {/*If menu is expanded, show expandComponent*/}
            {expand && expandComponent}
        </View>
    )
}

export default Dropdown
