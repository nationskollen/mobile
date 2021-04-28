/**
 * @category Map
 * @module ActivityLevel
 */
import React from 'react'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation, LanguageContextType } from '../../translate/LanguageContext'

export interface IndicatorProps {
    level: number
}

const ActivityData = (translate: LanguageContextType) => [
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
]

//renders activity bar
// TODO: Take in a location as prop
const ActivityLevel = () => {
    const { translate } = useTranslation()
    const { colors, isDarkMode } = useTheme()
    const activity = ActivityData(translate)[0]

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? colors.backgroundExtra : colors.background },
            ]}
        >
            <Ionicons name="md-people-outline" size={24} color={colors.text} />
            <View style={styles.activityLevelWrapper}>
                <View style={[styles.activityCircle, { backgroundColor: activity.color }]} />
                <Text style={[styles.activityLevelText, { color: colors.text }]}>
                    {activity.title}
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
