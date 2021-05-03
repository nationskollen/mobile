/**
 * @category Home
 * @module ReminderButton
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import OptionsMenu from 'react-native-option-menu'
import { useAsyncCallback } from 'react-async-hook'
import { useTranslation } from '../../translate/LanguageContext'

import { Event } from '@dsp-krabby/sdk'
import addToCalendar from './AddToCalendar'

export interface Props {
    event: Event
    eventAddress: string
    nationName: string
}

const ReminderButton = ({ event, eventAddress, nationName }: Props) => {
    const asyncOnPress = useAsyncCallback(() => addToCalendar(event, eventAddress, nationName))

    return (
        <OptionsMenu
            customButton={<Button />}
            destructiveIndex={2}
            options={['Lägg till i kalender', 'Push-notis', 'Avbryt']}
            actions={[asyncOnPress.execute, () => console.log('push notification pressed')]}
        />
    )
}

const Button = () => {
    const { colors, isDarkMode } = useTheme()
    const { translate } = useTranslation()

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: isDarkMode
                        ? colors.backgroundHighlight
                        : colors.backgroundExtra,
                },
            ]}
        >
            <Ionicons name="md-notifications-outline" size={20} color={colors.text} />
            <Text style={[styles.text, { color: colors.text }]}>
                {translate.home.reminderbutton}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5,
    },
})

export default ReminderButton
