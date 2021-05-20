import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Event } from '@nationskollen/sdk'
import { Ionicons } from '@expo/vector-icons'

export interface Props {
    event: Event
}

const EventTime = ({ event }: Props) => {
    const { colors } = useTheme()

    const timeData = useMemo(() => {
        const occursAt = new Date(event.occurs_at)
        const endsAt = new Date(event.ends_at)

        const startTime = occursAt.toLocaleTimeString('sv-SV').slice(0, 5)
        const endTime = endsAt.toLocaleTimeString('sv-SV').slice(0, 5)
        const dateStr = occursAt.getDate() + '/' + (occursAt.getMonth() + 1)

        return {
            startTime,
            endTime,
            dateStr,
        }
    }, [event])

    return (
        <View style={styles.container}>
            {/* Time */}
            <Ionicons name="time-sharp" size={20} color={colors.text} style={{ paddingRight: 5 }} />
            <Text style={[styles.time, { color: colors.text }]}>{timeData.startTime}</Text>
            <Text style={{ color: colors.text, marginHorizontal: 2 }}>{'-'}</Text>
            <Text style={[styles.time, { color: colors.text }]}>{timeData.endTime}</Text>

            {/* Date */}
            <Ionicons
                name="calendar-sharp"
                size={20}
                color={colors.text}
                style={{ paddingHorizontal: 5 }}
            />
            <Text style={[styles.time, { color: colors.text }]}>{timeData.dateStr}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 6,
    },

    time: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default EventTime
