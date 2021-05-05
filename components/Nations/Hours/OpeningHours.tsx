/**
 * Renders a list of opening hours for a location.
 *
 * @category Nation
 * @module OpeningHours
 */
import React from 'react'
import { Text, View, ViewStyle, ActivityIndicator } from 'react-native'
import { useTheme } from '../../ThemeContext'
import { OpeningHourCollection } from '@dsp-krabby/sdk'
import { useTranslation } from '../../../translate/LanguageContext'

import OpeningHour from './OpeningHour'

export interface Props {
    hours: OpeningHourCollection
    style?: ViewStyle
}

const OpeningHours = ({ hours, style }: Props) => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <View style={[style]}>
            {hours ? (
                hours.length > 0 ? (
                    hours.map((hour) => <OpeningHour key={hour.id} hour={hour} />)
                ) : (
                    <Text style={{ color: colors.text }}>{translate.openingHours.missing}</Text>
                )
            ) : (
                <ActivityIndicator size="small" color={colors.primaryText} />
            )}
        </View>
    )
}

export default OpeningHours
