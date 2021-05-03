/**
 * Renders a simple card with a dropshadow/elevation.
 *
 * @category Common
 * @module Card
 */
import React from 'react'
import { View, ViewStyle, TouchableHighlight, StyleSheet } from 'react-native'
import { useTheme } from './ThemeContext'

export interface Props {
    children: Element | Element[]
    onPress?: () => void
    style?: ViewStyle
}

const Card = ({ children, onPress, style }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const containerStyles = [
        styles.container,
        {
            backgroundColor: isDarkMode ? colors.backgroundExtra : colors.background,
            borderColor: colors.border,
        },
        style,
    ]

    if (onPress) {
        return (
            <TouchableHighlight
                style={containerStyles}
                onPress={onPress}
                underlayColor="rgba(255, 255, 255, 0.05)"
            >
                <View>{children}</View>
            </TouchableHighlight>
        )
    }

    return <View style={containerStyles}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 10,
        overflow: 'hidden',

        borderRadius: 10,
        borderWidth: 1,
        // elevation: 5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 3,
    },
})

export default Card
