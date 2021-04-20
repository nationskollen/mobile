import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    SafeAreaView,
    Platform,
} from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../ThemeContext'

import ActivityLevel from '../Map/ActivityLevel'

interface Props {
    nation: any
}

//renders information and title of nation. Can be used in maps too!
const NationInfo: React.FC<Props> = ({ nation }) => {
    //TODO: add openinghours and address to nation object
    //TODO: add color theme to nation, so that icons can match
    const { colors } = useTheme()

    return (
        <SafeAreaView>
            <View
                style={[
                    nationStyles.nationInfoWrapper,
                    { backgroundColor: colors.backgroundExtra },
                ]}
            >
                <View style={nationStyles.nationNameWrapper}>
                    <Text style={[nationStyles.nationName, { color: colors.text }]}>
                        {nation.nickname}
                    </Text>
                    <View
                        style={[
                            headerStyles.logoWrapper,
                            { backgroundColor: colors.backgroundExtra },
                        ]}
                    >
                        <Image source={nation.logo} style={headerStyles.logo} />
                    </View>
                </View>

                <View
                    style={[
                        nationStyles.clockSymbolWrapper,
                        { backgroundColor: colors.backgroundExtra },
                    ]}
                >
                    <Ionicons name="time-sharp" size={20} color={colors.text} />
                    <Text style={[nationStyles.openinghoursTitle, { color: colors.text }]}>
                        Öppettider
                    </Text>
                </View>

                <View
                    style={[
                        nationStyles.openinghoursWrapper,
                        { backgroundColor: colors.backgroundExtra },
                    ]}
                >
                    <View
                        style={[nationStyles.lineSymbol, { backgroundColor: colors.text }]}
                    ></View>
                    <View
                        style={[
                            nationStyles.openinghoursTextWrapper,
                            { backgroundColor: colors.backgroundExtra },
                        ]}
                    >
                        <Text style={[nationStyles.openinghoursText, { color: colors.text }]}>
                            Mån-Fre: 10:00-20:00
                        </Text>
                        <Text style={[nationStyles.openinghoursText, { color: colors.text }]}>
                            Lör-Sön: Stängt
                        </Text>
                    </View>
                </View>

                <View style={nationStyles.mapWrapper}>
                    <View style={nationStyles.mapSymbolWrapper}>
                        <Ionicons name="map" size={16} color="white" />
                    </View>
                    <View style={nationStyles.mapSymbolCircle}></View>
                    <Text
                        style={[nationStyles.mapAddress, { color: colors.text }]}
                        onPress={() =>
                            Alert.alert(
                                'Öppna i kartor?',
                                'Tryck OK för att öppna addressen i kartor',
                                [
                                    {
                                        text: 'Avbryt',
                                        onPress: () => console.log('Avbryt Pressed'),
                                    },
                                    {
                                        text: 'OK',
                                        onPress: () => console.log('OK Pressed'),
                                    },
                                ],
                                {
                                    cancelable: false,
                                }
                            )
                        }
                    >
                        S:t Larsgatan 13, Uppsala, 75311
                    </Text>
                </View>
            </View>

            <ActivityLevel />
        </SafeAreaView>
    )
}

const headerStyles = StyleSheet.create({
    headerWrapper: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        marginLeft: 6,
        width: '15%',
        height: '70%',
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '4%',
    },

    logoWrapper: {
        marginLeft: '5%',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
})

//styles for nation info
const nationStyles = StyleSheet.create({
    nationInfoWrapper: {
        backgroundColor: '#F3F3F3',
        height: 220, //TODO: change to not fixed size
        width: '100%',
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
