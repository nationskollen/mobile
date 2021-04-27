/**
 * @category Map
 * @module ActivityLevel
 */
import React from 'react'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from '../../translate/LanguageContext'

export interface IndicatorProps {
    level: number
}

//renders activity bar
// TODO: Take in a location as prop
const ActivityLevel = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundHighlight }]}>
            <View style={styles.left}>
                <Ionicons name="md-people-outline" size={24} color={colors.text} />
                <Text style={[styles.title, { color: colors.text }]}>
                    {translate.nations.activitylevel.header}
                </Text>
            </View>

            <ActivityIndicator level={0} />
        </View>
    )
}

//function that returns a component with a colored circle and text - determined by the activity level
const ActivityIndicator = ({ level }: IndicatorProps) => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    let color: string
    let title: string

    switch (level) {
        case 0:
            {
                title = translate.nations.activitylevel.closed
                color = 'black'
            }
            break
        case 1:
            {
                title = translate.nations.activitylevel.low
                color = 'green'
            }
            break
        case 2:
            {
                title = translate.nations.activitylevel.medium
                color = 'yellow'
            }
            break
        case 3:
            {
                title = translate.nations.activitylevel.high
                color = 'red'
            }
            break
        // TODO: Add cases for 4 and 5 as well
        default: {
            title = 'Ej tillgänglig'
            color = 'white'
        }
    }

    return (
        <View style={styles.activityLevelWrapper}>
            <View style={[styles.activityCircle, { backgroundColor: color }]} />
            <Text style={[styles.activityLevelText, { color: colors.text }]}>{title}</Text>
        </View>
    )
}

//styles for activitybar
const styles = StyleSheet.create({
    container: {
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        fontSize: 16,
        marginLeft: 15,
        fontWeight: 'bold',
    },

    activityLevelWrapper: {
        flexDirection: 'row',
    },

    activityCircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        alignSelf: 'center',
    },

    activityLevelText: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default ActivityLevel
