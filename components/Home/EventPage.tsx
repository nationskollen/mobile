/**
 * @category Home
 * @module EventPage
 */
import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'

import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer'
import { useEventDescription } from '@dsp-krabby/sdk'
import { RouteProp } from '@react-navigation/native'

import EventCover from '../Events/Cover'

export interface Props {
    route: RouteProp<TabStackParamList, 'Event'>
}

const EventPage = ({ route }: Props) => {
    const { colors } = useTheme()
    const { event, nation } = route.params
    const { data, error } = useEventDescription(event.id)

    return (
        <ScrollView style={styles.scrollView}>
            <EventCover src={event.cover_img_src} height={200} />
            <View style={styles.container}>
                <Text style={[styles.nationName, { color: colors.primaryText }]}>
                    {nation.name}
                </Text>
                <Text style={[styles.title, { color: colors.text }]}>{event.name}</Text>
                {data && (
                    <View style={styles.contentContainer}>
                        <Text style={{ color: colors.text }}>{data.long_description}</Text>
                        <View style={[styles.datesContainer, { borderColor: colors.border }]}>
                            <View style={styles.dateContainer}>
                                <Text style={[styles.dates, { color: colors.text }]}>Skapad:</Text>
                                <Text style={[styles.dates, { color: colors.text }]}>
                                    {new Date(data.created_at).toLocaleString('se')}
                                </Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={[styles.dates, { color: colors.text }]}>
                                    Senast uppdaterad:
                                </Text>
                                <Text style={[styles.dates, { color: colors.text }]}>
                                    {new Date(data.updated_at).toLocaleString('se')}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                {error && <Text style={{ color: colors.text }}>Kunde inte ladda event</Text>}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },

    container: {
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

    datesContainer: {
        borderTopWidth: 1,
        marginTop: 50,
        paddingTop: 10,
    },

    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    dates: {
        fontSize: 12,
        fontWeight: 'bold',
    },
})

export default EventPage
