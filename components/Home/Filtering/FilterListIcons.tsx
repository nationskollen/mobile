import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from '../../ThemeContext'

export interface Props {
    category: string
    size?: number
}

export const CategoryIcon = ({ category, size }: Props) => {
    const { colors } = useTheme()

    switch (category) {
        case 'Breakfast':
            return (
                <MaterialCommunityIcons name="food-variant" size={size ?? 24} color={colors.text} />
            )
        case 'Brunch':
            return <MaterialIcons name="brunch-dining" size={size ?? 24} color={colors.text} />
        case 'Club':
            return (
                <MaterialCommunityIcons name="party-popper" size={size ?? 24} color={colors.text} />
            )
        case 'Consert':
            return <Ionicons name="musical-notes" size={size ?? 24} color={colors.text} />
        case 'Culture':
            return <MaterialIcons name="theater-comedy" size={size ?? 24} color={colors.text} />
        case 'Fika':
            return <Ionicons name="cafe" size={size ?? 24} color={colors.text} />
        case 'Gasque':
            return <MaterialCommunityIcons name="bow-tie" size={size ?? 24} color={colors.text} />
        case 'Lunch':
            return <Ionicons name="fast-food" size={size ?? 24} color={colors.text} />
        case 'Other':
            return (
                <MaterialCommunityIcons
                    name="calendar-blank"
                    size={size ?? 24}
                    color={colors.text}
                />
            )
        case 'Pub':
            return <Ionicons name="beer" size={size ?? 24} color={colors.text} />
        case 'Restaurant':
            return <Ionicons name="restaurant" size={size ?? 24} color={colors.text} />
        case 'Sport':
            return <MaterialIcons name="sports-football" size={size ?? 24} color={colors.text} />
        default:
            return <View />
    }
}
