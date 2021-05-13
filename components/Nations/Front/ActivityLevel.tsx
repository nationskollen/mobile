/**
 * @category Map
 * @module ActivityLevel
 */
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme, ThemeColors } from '../../ThemeContext'
import { useActivityLevel, Location } from '@nationskollen/sdk'
import { useTranslation } from '../../../translate/LanguageContext'
import LanguageContextType from '../../../translate/LanguageContextType'

import Title from '../../Common/Title'

export interface Props {
    location: Location
}

const MAX_ACTIVITY_LEVEL = 5
const MAPPED_ACTIVITY_DATA = (colors: ThemeColors, translate: LanguageContextType) => {
    return [
        {
            title: translate.activityLevels[0],
        },
        {
            title: translate.activityLevels[1],
            color: colors.activityLevels.low,
        },
        {
            title: translate.activityLevels[2],
            color: colors.activityLevels.medium,
        },
        {
            title: translate.activityLevels[3],
            color: colors.activityLevels.high,
        },
        {
            title: translate.activityLevels[4],
            color: colors.activityLevels.veryHigh,
        },
        {
            title: translate.activityLevels[5],
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

    const { colors } = useTheme()
    const { translate } = useTranslation()
    const activityLevel = useActivityLevel(location.id, location.activity_level)
    const activityData = getActivityData(activityLevel, colors, translate)

    // If we receive invalid data we might as well hide the indicator
    if (!activityData) {
        return null
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundExtra }]}>
            <Ionicons name="md-people-outline" size={24} color={colors.textHighlight} />
            <View style={styles.activityLevelWrapper}>
                {activityLevel !== 0 && (
                    <View
                        style={[styles.activityCircle, { backgroundColor: activityData.color }]}
                    />
                )}
                <Title
                    label={activityData.title}
                    style={styles.activityLevelText}
                    noMargin={true}
                />
            </View>
        </View>
    )
}

//styles for activitybar
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 15,
        elevation: 0,
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
        fontWeight: 'bold',
    },
})

export default ActivityLevel
