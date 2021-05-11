/**
 * Renders a list of opening hours for a location.
 *
 * @category Nation
 * @module OpeningHours
 */
import React from 'react'
import { Text, View, ViewStyle, ActivityIndicator } from 'react-native'
import { useTheme } from '../../ThemeContext'
import { OpeningHourCollection } from '@nationskollen/sdk'
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
        <View style={[{ marginRight: 15, flex: 1, justifyContent: 'space-between' }, style]}>
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
