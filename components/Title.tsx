/**
 * Renders a simple title text component with basic styling
 * and correct colors based on the current theme.
 *
 * @category Common
 * @module Title
 */
import React from 'react'
import { useTheme } from './ThemeContext'
import { Text, TextStyle, StyleSheet } from 'react-native'

export interface Props {
    label: string
    noMargin?: boolean
    size?: 'small' | 'medium' | 'large'
    style?: TextStyle
}

const Title = ({ label, size, noMargin, style }: Props) => {
    const { colors } = useTheme()
    let fontSize = 16

    if (size === 'small') {
        fontSize = 12
    } else if (size === 'medium') {
        fontSize = 14
    } else if (size === 'large') {
        fontSize = 18
    }

    return (
        <Text
            style={[
                styles.text,
                { fontSize, color: colors.textHighlight, marginBottom: noMargin ? 0 : 5 },
                style,
            ]}
        >
            {label}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
})

export default Title
