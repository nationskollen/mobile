/**
 * @category Home
 * @module EventPage
 */
import React from 'react'
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer'
import { RouteProp } from '@react-navigation/native'
import { useEventDescription } from '@dsp-krabby/sdk'

import EventCover from '../Events/Cover'
import EventDates from '../Events/Dates'

export interface Props {
    route: RouteProp<TabStackParamList, 'Event'>
}

const EventPage = ({ route }: Props) => {
    const { colors } = useTheme()
    const { event, nation } = route.params
    const { data, error } = useEventDescription(event.id)

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <EventCover event={event} height={250} />
                <View style={styles.container}>
                    <Text style={[styles.nationName, { color: colors.primaryText }]}>
                        {nation.name}
                    </Text>
                    <Text style={[styles.title, { color: colors.textHighlight }]}>{event.name}</Text>
                    {error && <Text style={{ color: colors.text }}>Kunde inte ladda event</Text>}
                    {data ? (
                        <View>
                            <Text style={{ color: colors.text }}>{data.long_description}</Text>
                            <EventDates created={data.created_at} updated={data.updated_at} />
                        </View>
                    ) : (
                        <View style={styles.loading}>
                            <ActivityIndicator size="small" color={colors.primaryText} />
                        </View>
                    )}
                </View>
            </ScrollView>
            <View style={styles.footer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },

    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'column',
    },

    nationName: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    contentContainer: {
        marginTop: 10,
    },

    loading: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default EventPage
