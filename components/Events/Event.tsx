/**
 * @category Home
 * @module Event
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme } from '../ThemeContext'
import { useLocation } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'
import { useNation, Nation, Event as EventResponse } from '@dsp-krabby/sdk'

import Card from '../Card'
import EventCover from './Cover'
import ReminderButton from './ReminderButton'
import NationLogo from '../Nations/NationLogo'
import ContentContainer from '../ContentContainer'

export interface EventProps {
    event: EventResponse
}

export interface HeaderProps {
    nation: Nation
    event: EventResponse
}

const Event = ({ event }: EventProps) => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const { data: nation } = useNation(event.nation_id)

    return (
        <Card onPress={() => navigation.navigate('Event', { event, nation })}>
            <EventCover event={event} height={200} />
            <ContentContainer>
                <Header nation={nation} event={event} />

                {/*Title of event*/}
                <Text style={[styles.title, { color: colors.textHighlight }]}>{event.name}</Text>

                {/*Time of event*/}
                <Text style={[styles.time, { color: colors.text }]}>{event.occurs_at}</Text>

                {/*Description of event*/}
                <Text style={[styles.description, { color: colors.text }]}>
                    {event.short_description}
                </Text>
            </ContentContainer>
        </Card>
    )
}

const Header = ({ nation, event }: HeaderProps) => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const { data } = useLocation(event.location_id)
    const address = data && data.address
    const nationName = nation && nation.short_name

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.nationContainer}
                onPress={() => navigation.navigate('NationHome', { nation })}
            >
                {nation && (
                    <View style={styles.headerContent}>
                        <NationLogo src={nation.icon_img_src} size={40} />
                        <Text style={[styles.nationName, { color: colors.primaryText }]}>
                            {nation.name}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>

            {data && (
                <ReminderButton event={event} eventAddress={address} nationName={nationName} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
    },

    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },

    textContainer: {
        width: '100%',
        paddingHorizontal: 15,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    time: {
        fontSize: 16,
    },

    description: {
        color: '#808080',
    },

    nationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nationName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default Event
