import React from 'react'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from '../../translate/LanguageContext'

export interface Props {
    updated: string
    created: string
}

const EventDates = ({ created, updated }: Props) => {
    const { translate } = useTranslation()
    const { colors } = useTheme()

    return (
        <>
            <View style={styles.date}>
                <Text style={[styles.text, { color: colors.text }]}>
                    {translate.events.createdAt}:
                </Text>
                <Text style={[styles.text, styles.textValue, { color: colors.text }]}>
                    {new Date(created).toLocaleString('se')}
                </Text>
            </View>
            <View style={styles.date}>
                <Text style={[styles.text, { color: colors.text }]}>
                    {translate.events.updatedAt}:
                </Text>
                <Text style={[styles.text, styles.textValue, { color: colors.text }]}>
                    {new Date(updated).toLocaleString('se')}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    text: {
        fontSize: 13,
        fontWeight: 'bold',
    },

    textValue: {
        fontWeight: 'normal',
    },
})

export default EventDates
