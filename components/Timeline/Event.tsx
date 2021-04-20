import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useTheme } from '../ThemeContext'
import { useNation } from '@dsp-krabby/sdk'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface EventProps {
    // TODO: Replace with actual type from SDK
    event: Record<string, any>
}

interface HeaderProps {
    oid: number
}

const Event: React.FC<EventProps> = ({ event }) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <View
            style={[
                styles.eventContainer,
                { backgroundColor: isDarkMode ? colors.backgroundExtra : colors.background },
            ]}
        >
            {/*Cover Image of event*/}
            <View>
                {event.cover_img_src && (
                    <Image source={{ uri: event.cover_img_src }} style={styles.coverImg} />
                )}
            </View>

            <View style={styles.nationAndButton}>
                <Header oid={event.nation_id} />
                <ReminderButton />
            </View>

            {/*Container for title and description*/}
            <View style={styles.textContainer}>
                {/*Title of event*/}
                <View>
                    <Text style={[styles.title, { color: colors.text }]}>{event.name}</Text>
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

const Header: React.FC<HeaderProps> = ({ oid }) => {
    // TODO: Use types from SDK
    const { data } = useNation(oid)
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={nationStyles.container}
            // TODO: Push seems to only be available on StackNavigator?
            //@ts-ignore
            onPress={() => navigation.push('NationContent', { nation: nation })}
        >
            {data && (
                <View style={styles.headerContainer}>
                    <Image source={{ uri: data.icon_img_src }} style={nationStyles.logo}></Image>
                    <Text style={[nationStyles.name, { color: 'gray' }]}>{data.name}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

const ReminderButton: React.FC = () => {
    const { colors } = useTheme()

    return (
        <TouchableOpacity
            style={[reminderStyles.container, { backgroundColor: colors.backgroundHighlight }]}
        >
            <Ionicons name="md-notifications-outline" size={24} color={colors.text} />
            <Text style={[reminderStyles.text, { color: colors.text }]}>Påminn mig</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },

    coverImg: {
        height: 200,
        width: '100%',
    },

    eventContainer: {
        width: '100%',
        flex: 1,
        marginBottom: '3%',
        paddingTop: 20,
        paddingBottom: 35,
        paddingHorizontal: 25,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5,
        zIndex: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    nationAndButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textContainer: {
        width: '100%',
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
        width: '40%',
        alignItems: 'center',
    },

    logo: {
        width: 30,
        height: 30,
    },

    name: {
        color: '#808080',
        marginLeft: 10,
        width: '100%',
    },
})

const reminderStyles = StyleSheet.create({
    container: {
        width: 120,
        height: 40,
        borderRadius: 5,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

        backgroundColor: '#AEAEAE',
    },

    text: {
        color: 'white',
    },
})

export default Event
