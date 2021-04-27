/**
 * @category Home
 * @module ReminderButton
 */
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from '../../translate/LanguageContext'

import OptionsMenu from 'react-native-option-menu'

export interface Props {}

const ReminderButton = ({}: Props) => {
    return (
        <OptionsMenu
            customButton={<Button />}
            destructiveIndex={2}
            options={['Lägg till i kalender', 'Push-notis', 'Avbryt']}
            actions={[
                () => console.log('add to calendar pressed'),
                () => console.log('push notification pressed'),
            ]}
        />
    )
}

const Button = () => {
    const { colors, isDarkMode } = useTheme()
    const { translate } = useTranslation() 
    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundHighlight }]}>
            <Ionicons name="md-notifications-outline" size={20} color={colors.text} />
            <Text style={[styles.text, { color: colors.text }]}>{translate.home.reminderbutton}</Text>
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
