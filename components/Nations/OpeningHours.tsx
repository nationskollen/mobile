import React from 'react'
import { View, ViewStyle, ActivityIndicator } from 'react-native'
import { useTheme } from '../ThemeContext'
import { OpeningHourCollection } from '@dsp-krabby/sdk'

import OpeningHour from './OpeningHour'

export interface Props {
    hours: OpeningHourCollection
    style?: ViewStyle
}

const OpeningHours = ({ hours, style }: Props) => {
    const { colors } = useTheme()

    return (
        <View style={[style]}>
            {hours ? (
                hours.map((hour) => <OpeningHour key={hour.id} hour={hour} />)
            ) : (
                <ActivityIndicator size="small" color={colors.primaryText} />
            )}
        </View>
    )
}

export default OpeningHours
