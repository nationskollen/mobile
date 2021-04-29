import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { useTheme } from '../ThemeContext'
import { OpeningHourCollection } from '@dsp-krabby/sdk'

import OpeningHour from './OpeningHour'

export interface Props {
    hours: OpeningHourCollection
}

const OpeningHours = ({ hours }: Props) => {
    const { colors } = useTheme()

    return (
        <View style={styles.openinghoursTextWrapper}>
            {hours ? (
                hours.map((hour) => (
                    <OpeningHour key={hour.id} hour={hour} />
                ))
            ) : (
                <ActivityIndicator size="small" color={colors.primaryText} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    openinghoursTextWrapper: {
        justifyContent: 'space-evenly',
        marginLeft: 20,
    },
})

export default OpeningHours
