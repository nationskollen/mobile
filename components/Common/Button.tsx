/**
 * Renders a simple button with two available styles,
 * primary and light.
 *
 * @category Common
 * @module Button
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, ViewStyle } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'

export interface Props {
    type: 'primary' | 'light'
    label: string
    size?: 'large' | 'small'
    onPress?: () => void
    icon?: any
    fontSize?: number
    style?: ViewStyle
}

const Button = ({ onPress, size, label, type, icon, fontSize, style }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const actualFontSize = fontSize ?? (size === 'small' ? 14 : 16)
    const color = type === 'primary' ? 'white' : colors.textHighlight
    const padding = size === 'small' ? 10 : 15
    const backgroundColor =
        type === 'primary'
            ? colors.primary
            : isDarkMode
            ? colors.backgroundHighlight
            : colors.backgroundExtra
    const underlayColor = type === 'primary' ? colors.primaryHighlight : colors.backgroundHighlight

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={underlayColor}
            style={[styles.container, { backgroundColor, padding }, style]}
        >
            <View style={styles.wrapper}>
                <Text style={[styles.text, { fontSize: actualFontSize, color }]}>{label}</Text>
                {icon && <Ionicons name={icon} size={actualFontSize + 4} color={color} />}
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 5,
    },
})

export default Button
