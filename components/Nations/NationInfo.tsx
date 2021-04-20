import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    Platform,
} from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../ThemeContext'

interface Props {
    nation: any
}

//renders information and title of nation. Can be used in maps too!
const NationInfo: React.FC<Props> = ({ nation }) => {
    //TODO: add openinghours and address to nation object
    //TODO: add color theme to nation, so that icons can match
    const { colors } = useTheme()

    return (
        <View
            style={[
                styles.nationInfoWrapper,
                { backgroundColor: colors.backgroundExtra },
            ]}
        >
            <View style={styles.nationNameWrapper}>
                <Image source={{ uri: nation.icon_img_src }} style={styles.logo} />
                <Text style={[styles.nationName, { color: colors.text }]}>
                    {nation.name}
                </Text>
            </View>

            <View
                style={[
                    styles.clockSymbolWrapper,
                    { backgroundColor: colors.backgroundExtra },
                ]}
            >
                <Ionicons name="time-sharp" size={20} color={colors.text} />
                <Text style={[styles.openinghoursTitle, { color: colors.text }]}>
                    Öppettider
                </Text>
            </View>

            <View
                style={[
                    styles.openinghoursWrapper,
                    { backgroundColor: colors.backgroundExtra },
                ]}
            >
                <View
                    style={[styles.lineSymbol, { backgroundColor: colors.text }]}
                ></View>
                <View
                    style={[
                        styles.openinghoursTextWrapper,
                        { backgroundColor: colors.backgroundExtra },
                    ]}
                >
                    <Text style={[styles.openinghoursText, { color: colors.text }]}>
                        Mån-Fre: 10:00-20:00
                    </Text>
                    <Text style={[styles.openinghoursText, { color: colors.text }]}>
                        Lör-Sön: Stängt
                    </Text>
                </View>
            </View>
        </View>
    )
}

//styles for nation info
const styles = StyleSheet.create({
    logo: {
        height: 40,
        width: 40,
        marginRight: 15,
    },

    logoWrapper: {
        marginLeft: '5%',
        borderRadius: 50,
    },

    nationInfoWrapper: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 30,
    },

    nationNameWrapper: {
        paddingTop: '2%',
        flexDirection: 'row',
        paddingLeft: '7%',
        alignItems: 'center',
    },

    nationName: {
        fontSize: 26,
        fontWeight: 'bold',
    },

    openinghoursWrapper: {
        flexDirection: 'row',
        marginLeft: '6.5%',
        marginTop: 6,
    },

    clockSymbolWrapper: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: '7%',
        alignItems: 'center',
    },

    openinghoursTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
    },

    openinghoursTextWrapper: {
        justifyContent: 'space-evenly',
        marginLeft: 10,
    },

    openinghoursText: {
        fontSize: 12,
    },

    lineSymbol: {
        marginLeft: 10,
        width: 4,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'black',
    },

    mapWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

    mapSymbolWrapper: {
        position: 'absolute',
        marginLeft: '7.5%',

        zIndex: 2,
        elevation: Platform.OS === 'android' ? 2 : 0,
    },

    mapSymbolCircle: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'black',
        position: 'absolute',
        left: '7%',

        zIndex: 1,
        elevation: Platform.OS === 'android' ? 1 : 0,
    },

    mapAddress: {
        marginLeft: '14%',
        fontSize: 14,
        fontWeight: 'bold',
        zIndex: 3,
    },
})

export default NationInfo
