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
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.backgroundExtra,
                    borderColor: colors.borderDark,
                },
            ]}
        >
            <Text style={[styles.text, { color: colors.text }]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        borderWidth: 1,
        zIndex: 20,
        top: 10,
        left: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 11,
        textTransform: 'uppercase',
    },
})

export default Category
