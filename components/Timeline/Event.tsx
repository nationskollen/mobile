import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

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

const Header: React.FC<HeaderProps> = ({ oid }) => {
    // TODO: Use types from SDK
    const nation: any = useNation(oid)
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={nationStyles.container}
            // TODO: Push seems to only be available on StackNavigator?
            //@ts-ignore
            onPress={() => navigation.push('NationContent', { nation: nation })}
        >
            <Image source={nation.icon_img_src} style={nationStyles.logo}></Image>
            <Text style={[nationStyles.name, { color: 'gray' }]}>{nation.name}</Text>
        </TouchableOpacity>
    )
}

const ReminderButton: React.FC = () => {
    const { colors } = useTheme()

    return (
        <TouchableOpacity
            style={[reminderStyles.container, { backgroundColor: colors.backgroundExtra }]}
        >
            <Ionicons name="md-notifications-outline" size={24} color={colors.text} />
            <Text style={[reminderStyles.text, { color: colors.text }]}>Påminn mig</Text>
        </TouchableOpacity>
    )
}

const Event: React.FC<EventProps> = ({ event }) => {
    const { colors } = useTheme()

    return (
        <View style={[styles.eventContainer, { backgroundColor: colors.background }]}>
            {/*Cover Image of event*/}
            <View>
                {event.image != null && <Image source={event.image} style={styles.coverImg} />}
            </View>

            <View style={styles.nationAndButton}>
                <Header oid={event.nationId} />
                <ReminderButton />
            </View>

            {/*Container for title and description*/}
            <View style={styles.textContainer}>
                {/*Title of event*/}
                <View>
                    <Text style={[styles.title, { color: colors.text }]}>{event.title}</Text>
                </View>

                {/*Time of event*/}
                <View>
                    <Text style={[styles.time, { color: colors.text }]}>{event.time}</Text>
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

const styles = StyleSheet.create({
    coverImg: {
        height: 200,
        width: '100%',
    },

    eventContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        marginBottom: '3%',

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation:5,
        zIndex:5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    nationAndButton: {
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: '1%',
        marginBottom: '3%',
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
        marginLeft: '2%',
    },

    logo: {
        width: 30,
        height: 30,
    },

    name: {
        color: '#808080',
        marginLeft: '2%',
    },
})

const reminderStyles = StyleSheet.create({
    container: {
        width: 120,
        height: 40,
        borderRadius: 5,

        marginRight: '5%',
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
