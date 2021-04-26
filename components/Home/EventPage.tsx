/**
 * @category Home
 * @module EventPage
 */
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useEventDescription, Event as EventResponse } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'

export interface Props {
    route: RouteProp<TabStackParamList, 'Hem'>
}

const EventPage = ({ route }: Props) => {
    const { event } = route.params
    const { colors, isDarkMode } = useTheme()
    const { data, error } = useEventDescription(event.id)

    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default EventPage
