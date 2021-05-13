/**
 * @category Home
 * @module Event
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme } from '../ThemeContext'
import { useNavigation } from '@react-navigation/native'
import { useNation, useLocation, Event as EventResponse } from '@nationskollen/sdk'

import EventCover from './Cover'
import Card from '../Common/Card'
import Title from '../Common/Title'
import ReminderButton from './ReminderButton'
import NationLogo from '../Nations/Front/NationLogo'
import ContentContainer from '../Common/ContentContainer'

export interface Props {
    event: EventResponse
}

const Event = ({ event }: Props) => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const { data: nation } = useNation(event.nation_id)
    const { data: location } = useLocation(event.location_id)

    return (
        <Card
            onPress={() =>
                navigation.navigate('Event', { event, nation, eventAddress: location?.address })
            }
        >
            <EventCover event={event} height={200} />
            <ContentContainer>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.nationContainer}
                        onPress={() => navigation.navigate('NationHome', { oid: nation.oid })}
                    >
                        {nation && (
                            <View style={styles.headerContent}>
                                <NationLogo src={nation.icon_img_src} size={40} />
                                <Title
                                    style={{ marginLeft: 10, color: colors.primaryText }}
                                    label={nation.name}
                                    noMargin={true}
                                    size="medium"
                                />
                            </View>
                        )}
                    </TouchableOpacity>

                    {location && (
                        <ReminderButton
                            event={event}
                            eventAddress={location?.address}
                            nationName={nation?.name}
                        />
                    )}
                </View>

                {/*Title of event*/}
                <Title label={event.name} style={styles.title} size="medium" />

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
