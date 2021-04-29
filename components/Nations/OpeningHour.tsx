import React from 'react'
import { Text, StyleSheet, TextStyle } from 'react-native'
import { useTheme } from '../ThemeContext'
import { useTranslation } from '../../translate/LanguageContext'
import { OpeningHour as OpeningHourResponse } from '@dsp-krabby/sdk'
import LanguageContextType from '../../translate/LanguageContextType'

export interface Props {
    hour: OpeningHourResponse
    style: TextStyle
}

const TYPES = {
    DEFAULT: 0,
    EXCEPTION: 1,
}

const toDayString = (hour: OpeningHourResponse, translate: LanguageContextType) => {
    if (hour.type === TYPES.EXCEPTION) {
        return `${hour.day_special}, ${hour.day_special_date}`
    }

    switch (hour.day) {
        case 0:
            return translate.days.monday
        case 1:
            return translate.days.tuesday
        case 2:
            return translate.days.wednesday
        case 3:
            return translate.days.thursday
        case 4:
            return translate.days.friday
        case 5:
            return translate.days.saturday
        case 6:
            return translate.days.sunday
        default:
            return 'Unknown'
    }
}

const OpeningHour = ({ style, hour }: Props) => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Text
            key={hour.id}
            style={[styles.openinghoursText, { color: colors.text }, style]}
        >
            {toDayString(hour, translate)}:{' '}
            {hour.is_open
                ? `${hour.open}-${hour.close}`
                : translate.map.popup.closed}
        </Text>
    )
}

const styles = StyleSheet.create({
    openinghoursText: {
        fontSize: 14,
    },
})

export default OpeningHour
