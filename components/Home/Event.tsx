import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useNation, Event as EventResponse } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'

import NationLogo from '../Nations/NationLogo'

export interface EventProps {
    event: EventResponse
}

export interface HeaderProps {
    oid: number
}

const Event = ({ event }: EventProps) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <View
            style={[
                styles.eventContainer,
                { backgroundColor: isDarkMode ? colors.backgroundExtra : colors.background },
            ]}
        >
            {event.cover_img_src && (
                <View style={styles.coverImgWrapper}>
                    <Image source={{ uri: event.cover_img_src }} style={styles.coverImg} />
                </View>
            )}

            <Header oid={event.nation_id} />

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
                        {event.description}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const Header = ({ oid }: HeaderProps) => {
    // TODO: Use types from SDK
    const { colors } = useTheme()
    const { data } = useNation(oid)
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={nationStyles.container}
                onPress={() => navigation.navigate('NationContent', { nation: data })}
            >
                {data && (
                    <View style={styles.headerContent}>
                        <NationLogo src={data.icon_img_src} size={40} />
                        <Text style={[nationStyles.name, { color: colors.primaryText }]}>
                            {data.name}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
            <ReminderButton />
        </View>
    )
}

const ReminderButton = () => {
    const { colors } = useTheme()

    return (
        <TouchableOpacity
            style={[reminderStyles.container, { backgroundColor: colors.backgroundHighlight }]}
        >
            <Ionicons name="md-notifications-outline" size={20} color={colors.text} />
            <Text style={[reminderStyles.text, { color: colors.text }]}>Påminn mig</Text>
        </TouchableOpacity>
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

    coverImgWrapper: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },

    coverImg: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
    },

    eventContainer: {
        flex: 1,
        marginBottom: 10,
        paddingBottom: 20,
        marginHorizontal: 10,

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

const reminderStyles = StyleSheet.create({
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

export default Event
