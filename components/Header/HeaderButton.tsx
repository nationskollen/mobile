import React from 'react'
import { Platform, ViewStyle, Animated, TouchableHighlight, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    icon: IconName
    onPress: () => void
    color?: string | Animated.AnimatedInterpolation
    iconSize?: number
    isLeft?: boolean
    backgroundColor?: string
    style?: ViewStyle
}

export const HEADER_BUTTON_WIDTH = Platform.OS === 'ios' ? 40 : 45

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons)

const HeaderButton = ({
    icon,
    iconSize,
    onPress,
    color,
    isLeft,
    backgroundColor,
    style,
}: Props) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}
            style={[
                styles.button,
                {
                    marginLeft: isLeft ? 5 : 0,
                    marginRight: isLeft ? 0 : 5,
                    backgroundColor: backgroundColor ?? 'transparent',
                },
                style,
            ]}
        >
            <AnimatedIcon
                size={iconSize ?? 24}
                name={icon}
                style={{ color: color ?? colors.textHighlight }}
            />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: HEADER_BUTTON_WIDTH,
        height: HEADER_BUTTON_WIDTH,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
})

export default HeaderButton
