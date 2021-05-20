/**
 * @category Home
 * @module ReminderButton
 */
import React from 'react'
import { View, ViewStyle, Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import OptionsMenu from 'react-native-option-menu'
import { useAsyncCallback } from 'react-async-hook'
import { useTranslation } from '../../translate/LanguageContext'

import { Event } from '@nationskollen/sdk'
import addToCalendar from './AddToCalendar'

export interface ButtonProps {
    hideLabel?: boolean
    style?: ViewStyle
}

export interface Props extends ButtonProps {
    event: Event
    eventAddress: string
    nationName: string
    button?: Element
}

const ReminderButton = ({ event, eventAddress, nationName, style }: Props) => {
    const { translate } = useTranslation()
    const asyncOnPress = useAsyncCallback(() =>
        addToCalendar(event, eventAddress, nationName, translate.reminderPopup)
    )

    return (
        <OptionsMenu
            customButton={<Button style={style} />}
            destructiveIndex={1}
            options={[translate.reminderPopup.addToCalendar, translate.reminderPopup.cancel]}
            actions={[asyncOnPress.execute]}
        />
    )
}

const Button = ({ style }) => {
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
                style,
            ]}
        >
            <Ionicons name="notifications-outline" size={24} color={colors.text} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 10,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontFamily: 'Roboto_700Bold',
        marginLeft: 5,
    },
})

export default ReminderButton
