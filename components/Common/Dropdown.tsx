/**
 * Renders an expandable dropdown menu header.
 * Child elements will be rendered when the dropdown is clicked.
 *
 * @category Misc
 * @module Dropdown
 */

import { View } from 'react-native'
import React, { useState } from 'react'

import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import ListButton from '../List/ListButton'

export interface Props {
    title: string
    icon: Element
    children: Element
    expandedOnMount?: boolean
}

export const Dropdown = ({ title, children, icon, expandedOnMount }: Props) => {
    const { colors } = useTheme()
    const [expand, setExpand] = useState(expandedOnMount)

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
            {expand && children}
        </View>
    )
}

export default Dropdown
