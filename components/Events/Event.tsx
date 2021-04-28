/**
 * @category Home
 * @module Event
 */
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native'

import { useTheme } from '../ThemeContext'
import { useNation, Nation, Event as EventResponse } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'

import EventCover from './Cover'
import ReminderButton from './ReminderButton'
import NationLogo from '../Nations/NationLogo'

export interface EventProps {
    event: EventResponse
}

export interface HeaderProps {
    nation: Nation
    event: EventResponse
}

const Event = ({ event }: EventProps) => {
    const navigation = useNavigation()
    const { data: nation } = useNation(event.nation_id)
    const { colors, isDarkMode } = useTheme()

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Event', { event, nation })}>
            <View
                style={[
                    styles.eventContainer,
                    { backgroundColor: isDarkMode ? colors.backgroundExtra : colors.background },
                ]}
            >
                <EventCover event={event} height={200} />
                <Header nation={nation} event={event}/>

                {/*Container for title and description*/}
                <View style={styles.textContainer}>
                    {/*Title of event*/}
                    <View>
                        <Text style={[styles.title, { color: colors.textHighlight }]}>
                            {event.name}
                        </Text>
                    </View>

                    {/*Time of event*/}
                    <View>
                        <Text style={[styles.time, { color: colors.text }]}>{event.occurs_at}</Text>
                    </View>

                    {/*Description of event*/}
                    <View style={styles.descriptionContainer}>
                        <Text style={[styles.description, { color: colors.text }]}>
                            {event.short_description}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const Header = ({ nation, event}: HeaderProps) => {
    const { colors } = useTheme()
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={nationStyles.container}
                onPress={() => navigation.navigate('NationContent', { nation })}
            >
                {nation && (
                    <View style={styles.headerContent}>
                        <NationLogo src={nation.icon_img_src} size={40} />
                        <Text style={[nationStyles.name, { color: colors.primaryText }]}>
                            {nation.name}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
            <ReminderButton event={event}/>
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
        paddingHorizontal: 15,
        paddingTop: 15,
    },

    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },

    eventContainer: {
        flex: 1,
        marginBottom: 10,
        paddingBottom: 20,
        marginHorizontal: 10,
        overflow: 'hidden',

        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
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

    descriptionContainer: {
        marginTop: '1%',
        width: '100%',
    },

    description: {
        color: '#808080',
    },
})

const nationStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },

    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default Event
