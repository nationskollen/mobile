/**
 * @category Home
 * @module ReminderButton
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OptionsMenu from 'react-native-option-menu'
import { useAsyncCallback } from 'react-async-hook';

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from '../../translate/LanguageContext'

import { EventProps} from './Event'
import addToCalendar, { getPermission } from './AddToCalendar'

const ReminderButton = ({ event }: EventProps ) => {
    const asyncOnPress = useAsyncCallback(()=>addToCalendar(event))

    return (
        <OptionsMenu
            customButton={<Button />}
            destructiveIndex={2}
            options={['Lägg till i kalender', 'Push-notis', 'Avbryt']}
            actions={[
                asyncOnPress.execute,
                () => console.log('push notification pressed'),
            ]}
        />
    )
}

const Button = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundHighlight }]}>
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
