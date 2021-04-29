/**
 * @category Map
 * @module ActivityLevel
 */
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme, ThemeColors } from '../ThemeContext'
import { useActivityLevel, Location } from '@dsp-krabby/sdk'
import { useTranslation } from '../../translate/LanguageContext'
import LanguageContextType from '../../translate/LanguageContextType'

export interface Props {
    location: Location
}

const MAX_ACTIVITY_LEVEL = 5
const MAPPED_ACTIVITY_DATA = (colors: ThemeColors, translate: LanguageContextType) => {
    return [
        {
            title: translate.activityLevels.closed,
        },
        {
            title: translate.activityLevels.low,
            color: colors.activityLevels.low,
        },
        {
            title: translate.activityLevels.medium,
            color: colors.activityLevels.medium,
        },
        {
            title: translate.activityLevels.high,
            color: colors.activityLevels.high,
        },
        {
            title: translate.activityLevels.veryHigh,
            color: colors.activityLevels.veryHigh,
        },
        {
            title: translate.activityLevels.max,
            color: colors.activityLevels.max,
        },
    ]
}

const getActivityData = (level: number, colors: ThemeColors, translate: LanguageContextType) => {
    if (level < 0 || level > MAX_ACTIVITY_LEVEL) {
        return null
    }

    return MAPPED_ACTIVITY_DATA(colors, translate)[level]
}

const ActivityLevel = ({ location }: Props) => {
    if (!location) {
        return null
    }

    const { translate } = useTranslation()
    const { colors, isDarkMode } = useTheme()
    const activityLevel = useActivityLevel(location.id, location.activity_level)
    const activityData = getActivityData(activityLevel, colors, translate)

    // If we receive invalid data we might as well hide the indicator
    if (!activityData) {
        return null
    }

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? colors.backgroundExtra : colors.background },
            ]}
        >
            <Ionicons name="md-people-outline" size={24} color={colors.textHighlight} />
            <View style={styles.activityLevelWrapper}>
                {activityLevel !== 0 && (
                    <View
                        style={[styles.activityCircle, { backgroundColor: activityData.color }]}
                    />
                )}
                <Text style={[styles.activityLevelText, { color: colors.textHighlight }]}>
                    {activityData.title}
                </Text>
            </View>
        </View>
    )
}

//styles for activitybar
const styles = StyleSheet.create({
    container: {
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 15,
        elevation: 10,
    },

    activityLevelWrapper: {
        flexDirection: 'row',
    },

    activityCircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        alignSelf: 'center',
        marginLeft: 8,
    },

    activityLevelText: {
        marginLeft: 8,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default ActivityLevel
