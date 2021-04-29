import React, { useRef } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { useTheme } from '../ThemeContext'
import { OpeningHourCollection } from '@dsp-krabby/sdk'

import OpeningHour from './OpeningHour'

export interface Props {
    hours: OpeningHourCollection
    date: Date
}

const TodaysOpeningHours = ({ date, hours }: Props) => {
    const { colors } = useTheme()
    const currentDay = useRef(date.getDay() - 1).current
    const currentDate = useRef(`${date.getDate()}/${date.getMonth()}`).current
    const filteredHours = hours.filter((hour) => hour.day === currentDay || hour.day_special_date === currentDate)

    return (
        <View style={styles.container}>
            {filteredHours ? (
                filteredHours.map((hour) => <OpeningHour key={hour.id} hour={hour} style={styles.text} />)
            ) : (
                <ActivityIndicator size="small" color={colors.primaryText} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
})

export default TodaysOpeningHours
