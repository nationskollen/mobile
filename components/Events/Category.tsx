import React from 'react'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    name: string
}

const Category = ({ name }: Props) => {
    const { colors } = useTheme()

    if (!name) {
        return null
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.primary }]}>
            <Text style={[styles.text, { color: 'white' }]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 20,
        top: 10,
        left: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        elevation: 2,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
    },
})

export default Category
