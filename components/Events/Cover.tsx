import React from 'react'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { Event as EventResponse } from '@dsp-krabby/sdk'
import { View, Image, StyleSheet } from 'react-native'

import EventCategory from './Category'

export interface Props {
    event: EventResponse
    height: number
}

const EventCover = ({ event, height }: Props) => {
    const { colors } = useTheme()

    return (
        <View style={[styles.container, { height, backgroundColor: colors.backgroundHighlight }]}>
            <EventCategory name={event.category && event.category.name} />
            {event.cover_img_src ? (
                <Image source={{ uri: event.cover_img_src }} style={styles.img} />
            ) : (
                <Ionicons name="calendar" size={100} color={colors.borderDark} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
})

export default EventCover
