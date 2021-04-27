import React from 'react'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    updated: string
    created: string
}

const EventDates = ({ created, updated }: Props) => {
    const { colors } = useTheme()

    return (
        <View style={[styles.container, { borderColor: colors.border }]}>
            <View style={styles.date}>
                <Text style={[styles.text, { color: colors.text }]}>Skapad:</Text>
                <Text style={[styles.text, { color: colors.text }]}>
                    {new Date(created).toLocaleString('se')}
                </Text>
            </View>
            <View style={styles.date}>
                <Text style={[styles.text, { color: colors.text }]}>Senast uppdaterad:</Text>
                <Text style={[styles.text, { color: colors.text }]}>
                    {new Date(updated).toLocaleString('se')}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        marginTop: 15,
        paddingVertical: 15,
    },

    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        fontSize: 12,
        fontWeight: 'bold',
    },
})

export default EventDates
