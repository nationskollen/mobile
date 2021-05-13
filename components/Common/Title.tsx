/**
 * Renders a simple title text component with basic styling
 * and correct colors based on the current theme.
 *
 * @category Common
 * @module Title
 */
import React from 'react'
import { useTheme } from '../ThemeContext'
import { TouchableOpacity, Text, TextStyle, View, ViewStyle, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export interface Props {
    label: string
    noMargin?: boolean
    size?: 'small' | 'medium' | 'large'
    icon?: any
    color?: string
    style?: TextStyle
    containerStyle?: ViewStyle
    numberOfLines?: number
    onPress?: () => void
}

const Title = ({
    label,
    size,
    noMargin,
    icon,
    color,
    style,
    containerStyle,
    numberOfLines,
    onPress,
}: Props) => {
    const { colors } = useTheme()
    let fontSize = 16

    if (size === 'small') {
        fontSize = 12
    } else if (size === 'medium') {
        fontSize = 14
    } else if (size === 'large') {
        fontSize = 18
    }

    const content = (
        <>
            {icon && (
                <Ionicons
                    name={icon}
                    size={fontSize + 2}
                    color={color ?? colors.textHighlight}
                    style={styles.icon}
                />
            )}
            <Text
                style={[styles.text, { fontSize, color: color ?? colors.textHighlight }, style]}
                numberOfLines={numberOfLines}
            >
                {label}
            </Text>
        </>
    )

    if (onPress) {
        return (
            <TouchableOpacity
                style={[styles.container, { marginBottom: noMargin ? 0 : 5 }, containerStyle]}
                onPress={onPress}
            >
                {content}
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.container, { marginBottom: noMargin ? 0 : 5 }, containerStyle]}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    text: {
        fontFamily: 'Roboto_700Bold',
    },

    icon: {
        marginRight: 5,
    },
})

export default Title
