/**
 * @category Map
 * @module ActivityLevel
 */
import React from 'react'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { useActivityLevel, Location } from '@dsp-krabby/sdk'
import { useTranslation } from '../../translate/LanguageContext'
import LanguageContextType from '../../translate/LanguageContextType'

export interface Props {
    location: Location
}

const MAX_ACTIVITY_LEVEL = 5
const MAPPED_ACTIVITY_DATA = (translate: LanguageContextType) => {
    return [
        {
            title: translate.nations.activitylevel.closed,
            color: 'black',
        },
        {
            title: translate.nations.activitylevel.low,
            color: 'green',
        },
        {
            title: translate.nations.activitylevel.medium,
            color: 'yellow',
        },
        {
            title: translate.nations.activitylevel.high,
            color: 'red',
        },
        {
            title: translate.nations.activitylevel.veryHigh,
            color: 'red',
        },
        {
            title: translate.nations.activitylevel.max,
            color: 'red',
        },
    ]
}

const getActivityData = (level: number, translate: LanguageContextType) => {
    if (level < 0 || level > MAX_ACTIVITY_LEVEL) {
        return null
    }

    return MAPPED_ACTIVITY_DATA(translate)[level]
}

const ActivityLevel = ({ location }: Props) => {
    if (!location) {
        return null
    }

    const { translate } = useTranslation()
    const { colors, isDarkMode } = useTheme()
    const activityLevel = useActivityLevel(location.id, location.activity_level)
    const activityData = getActivityData(activityLevel, translate)

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
            <Ionicons name="md-people-outline" size={24} color={colors.text} />
            <View style={styles.activityLevelWrapper}>
                <View style={[styles.activityCircle, { backgroundColor: activityData.color }]} />
                <Text style={[styles.activityLevelText, { color: colors.text }]}>
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
        marginLeft: 8,
    },

    activityCircle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },

    activityLevelText: {
        marginLeft: 8,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default ActivityLevel
