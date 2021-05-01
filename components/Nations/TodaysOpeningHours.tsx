/**
 * Renders the current days opening hour(s) (if defined).
 *
 * @category Nation
 * @module TodaysOpeningHours
 */
import React, { useRef } from 'react'
import { Text, View, ViewStyle, StyleSheet, ActivityIndicator } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Location, useOpeningHours  } from '@dsp-krabby/sdk'
import { useTranslation } from '../../translate/LanguageContext'

export interface Props {
    date: Date
    location: Location
    style?: ViewStyle
}

const TodaysOpeningHours = ({ date, location, style }: Props) => {
    const { colors } = useTheme()
    const { translate } = useTranslation()
    const { data: hours } = useOpeningHours(location.id)
    const currentDay = useRef(date.getDay() - 1).current
    const currentDate = useRef(`${date.getDate()}/${date.getMonth()}`).current

    // Only render if we have available opening hours
    if (!hours) {
        return null
    }

    // TODO: Make sure to skip regular opening hours if there is a matching exception
    const filteredHours = hours.filter(
        (hour) => hour.day === currentDay || hour.day_special_date === currentDate
    )

    if (filteredHours.length === 0) {
        return null
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundExtra }, style]}>
            {filteredHours ? (
                filteredHours.map((hour) => (
                    <Text key={hour.id} style={styles.text}>
                        {
                            hour.is_open ?
                                `${translate.openingHours.openToday}: ${hour.open}-${hour.close}` :
                                `${translate.openingHours.closedToday}`
                        }
                    </Text>
                ))
            ) : (
                <ActivityIndicator size="small" color={colors.primaryText} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    text: {
        fontWeight: 'bold',
    },
})

export default TodaysOpeningHours
