import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../../ThemeContext'

export interface Props {
    category: string
}

export const CategoryIcon = ({ category }: Props) => {
    const { colors } = useTheme()

    switch (category) {
        case 'Breakfast':
            return <Ionicons name="fast-food" size={24} color={colors.text} />
        case 'Brunch':
            return <View></View>
        case 'Club':
            return <View></View>
        case 'Consert':
            return <View></View>
        case 'Culture':
            return <View></View>
        case 'Fika':
            return <View></View>
        case 'Gasque':
            return <View></View>
        case 'Lunch':
            return <View></View>
        case 'Other':
            return <View></View>
        case 'Pub':
            return <View></View>
        case 'Restaurant':
            return <View></View>
        case 'Sport':
            return <View></View>
        default:
            return <View></View>
    }
}
