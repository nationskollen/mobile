/**
 * Renders badge with date of associated event
 * @category Home
 * @module DateBadge
 */

import React from 'react'
import Card from '../Common/Card'
import { View, StyleSheet, Text } from 'react-native'
import { useDatePicker } from './DatePickerContext'
import { useTheme } from '../ThemeContext'

const DateBadge = () => {
    const { shownDate } = useDatePicker()
    const { colors } = useTheme()

    return (
        <Card style={[{ backgroundColor: colors.background }, styles.container]}>
            <Text style={styles.date}>{shownDate.getDate()}</Text>
            <Text style={styles.month}>
                {shownDate.toLocaleString('default', { month: 'short' })}
            </Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    month: {
        fontSize: 14,
        color: '#71002E',
    },
})

export default DateBadge
