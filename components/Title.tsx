import React from 'react'
import { useTheme } from './ThemeContext'
import { Text, StyleSheet } from 'react-native'

export interface Props {
    label: string
    size?: 'small' | 'medium' | 'large'
}

const Title = ({ label, size }: Props) => {
    const { colors } = useTheme()
    let fontSize = 16

    if (size === 'small') {
        fontSize = 12
    } else if (size === 'medium') {
        fontSize = 14
    } else if (size === 'large') {
        fontSize = 18
    }

    return <Text style={[styles.text, { fontSize, color: colors.textHighlight }]}>{label}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
})

export default Title
