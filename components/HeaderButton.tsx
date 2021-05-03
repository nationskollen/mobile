import React from 'react'
import { Animated, TouchableHighlight, StyleSheet } from 'react-native'
import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    icon: IconName
    onPress: () => void
    color?: string | Animated.AnimatedInterpolation
    iconSize?: number
    isLeft?: boolean
}

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons)

const HeaderButton = ({ icon, iconSize, onPress, color, isLeft }: Props) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
            style={[styles.button, { marginLeft: isLeft ? 5 : 0, marginRight: isLeft ? 0 : 5 }]}
        >
            <AnimatedIcon size={iconSize ?? 24} name={icon} style={{ color: color ?? colors.textHighlight }} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default HeaderButton
