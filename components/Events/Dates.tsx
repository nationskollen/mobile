import React from 'react'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    updated: string
    created: string
}

const EventDates = ({ created, updated }: Props) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: isDarkMode ? colors.backgroundHighlight : colors.backgroundExtra
            }
        ]}>
            <View style={styles.date}>
                <Text style={[styles.text, { color: colors.text }]}>Skapad:</Text>
                <Text style={[styles.text, styles.textValue, { color: colors.text }]}>
                    {new Date(created).toLocaleString('se')}
                </Text>
            </View>
            <View style={styles.date}>
                <Text style={[styles.text, { color: colors.text }]}>Senast uppdaterad:</Text>
                <Text style={[styles.text, styles.textValue, { color: colors.text }]}>
                    {new Date(updated).toLocaleString('se')}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingBottom: 10,
        marginTop: 15,
    },

    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    text: {
        fontSize: 12,
        fontWeight: 'bold',
    },

    textValue: {
        fontWeight: 'normal',
    },
})

export default EventDates
