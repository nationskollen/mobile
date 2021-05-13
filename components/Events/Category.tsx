import React from 'react'
import { Event } from '@nationskollen/sdk'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    event: Event
}

const Categories = ({ event }: Props) => {
    const categories = [event.category.name]

    if (!event.only_members && !event.only_students) {
        categories.push('Everyone')
    } else {
        if (event.only_members) {
            categories.push('Members')
        }

        if (event.only_students) {
            categories.push('Nation card')
        }
    }

    const { colors } = useTheme()

    if (categories.length === 0) {
        return null
    }

    return (
        <View style={styles.position}>
            {categories.map((category, index) => (
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
                    <Text style={[styles.text, { color: colors.text }]}>{category}</Text>
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
