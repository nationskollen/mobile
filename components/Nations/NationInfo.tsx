import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import LogoCircle from './LogoCircle'

interface Props {
    nation: any
    backgroundColor?: string
}

//renders information and title of nation. Can be used in maps too!
const NationInfo: React.FC<Props> = ({ nation, backgroundColor }) => {
    //TODO: add openinghours and address to nation object
    //TODO: add color theme to nation, so that icons can match
    const { colors } = useTheme()

    return (
        <View
            style={[
                styles.nationInfoWrapper,
                { backgroundColor: backgroundColor ?? colors.background },
            ]}
        >
            <View style={styles.nationNameWrapper}>
                <LogoCircle src={nation.icon_img_src} size={50} />
                <Text style={[styles.nationName, { color: colors.text }]}>{nation.name}</Text>
            </View>

            <View style={styles.descriptionWrapper}>
                <View style={[styles.clockSymbolWrapper]}>
                    <Ionicons name="time-outline" size={20} color={colors.text} />
                    <Text style={[styles.openinghoursTitle, { color: colors.text }]}>
                        Öppettider
                    </Text>
                </View>

                <View style={styles.openinghoursWrapper}>
                    <View style={[styles.lineSymbol, { backgroundColor: colors.text }]}></View>
                    <View style={styles.openinghoursTextWrapper}>
                        <Text style={[styles.openinghoursText, { color: colors.text }]}>
                            Mån-Fre: 10:00-20:00
                        </Text>
                        <Text style={[styles.openinghoursText, { color: colors.text }]}>
                            Lör-Sön: Stängt
                        </Text>
                    </View>
                </View>

                <View style={styles.mapWrapper}>
                    <Ionicons name="map-outline" size={16} color={colors.text} />
                    <Text
                        style={[styles.mapAddress, { color: colors.text }]}
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
        </View>
    )
}

//styles for nation info
const styles = StyleSheet.create({
    descriptionWrapper: {
        marginLeft: 16,
    },

    nationInfoWrapper: {
        width: '100%',
        paddingTop: 25,
        paddingBottom: 30,
        paddingHorizontal: 15,
    },

    nationNameWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nationName: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    openinghoursWrapper: {
        flexDirection: 'row',
        marginTop: 6,
    },

    clockSymbolWrapper: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
    },

    openinghoursTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
    },

    openinghoursTextWrapper: {
        justifyContent: 'space-evenly',
        marginLeft: 20,
    },

    openinghoursText: {
        fontSize: 14,
    },

    lineSymbol: {
        marginLeft: 8,
        width: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'black',
    },

    mapWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    mapAddress: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 15,
    },
})

export default NationInfo
