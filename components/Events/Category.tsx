import React from 'react'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    names: Array<string>
}

const Categories = ({ names }: Props) => {
    const { colors } = useTheme()

    if (names.length === 0) {
        return null
    }

    return (
        <View style={styles.position}>
            {names.map((name, index) => (
                <View
                    style={[
                        styles.container,
                        {
                            backgroundColor: colors.backgroundExtra,
                            borderColor: colors.borderDark,
                        },
                    ]}
                    key={index}
                >
                    <Text style={[styles.text, { color: colors.text }]}>{name}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        marginRight: 5,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 11,
        textTransform: 'uppercase',
    },

    position: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 20,
        top: 10,
        left: 10,
    },
})

export default Categories
