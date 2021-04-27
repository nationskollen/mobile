/**
 * This component renders information about a nation
 * @category Nation
 * @module NationInfo
 * @param nation The nation whose information is to be rendered
 * @param backgroundColor Optional background color
 * @param paddingTop Optional padding on the top
 *
 */
import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'

import { Nation } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import NationLogo from './NationLogo'
import { useTranslation } from '../../translate/LanguageContext'

export interface Props {
    nation: Nation
    backgroundColor?: string
    paddingTop?: number
}

//renders information and title of nation. Can be used in maps too!
const NationInfo = ({ nation, backgroundColor, paddingTop }: Props) => {
    //TODO: add openinghours and address to nation object
    //TODO: add color theme to nation, so that icons can match
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <View
            style={[
                styles.nationInfoWrapper,
                {
                    backgroundColor: backgroundColor ?? colors.background,
                    paddingTop: paddingTop ?? 15,
                },
            ]}
        >
            <View style={styles.nationNameWrapper}>
                <NationLogo src={nation.icon_img_src} size={50} />
                <Text style={[styles.nationName, { color: colors.textHighlight }]}>
                    {nation.name}
                </Text>
            </View>

            <View style={styles.descriptionWrapper}>
                <View style={[styles.clockSymbolWrapper]}>
                    <Ionicons name="time-outline" size={20} color={colors.text} />
                    <Text style={[styles.openinghoursTitle, { color: colors.textHighlight }]}>
                        {translate.map.popup.openingtimes}
                    </Text>
                </View>

                <View style={styles.openinghoursWrapper}>
                    <View style={[styles.lineSymbol, { backgroundColor: colors.text }]}></View>
                    <View style={styles.openinghoursTextWrapper}>
                        <Text style={[styles.openinghoursText, { color: colors.text }]}>
                            {translate.map.popup.montofri + '10:00-20:00'}
                        </Text>
                        <Text style={[styles.openinghoursText, { color: colors.text }]}>
                            {translate.map.popup.sattosun + translate.map.popup.closed}
                        </Text>
                    </View>
                </View>

                <View style={styles.mapWrapper}>
                    <Ionicons name="map-outline" size={20} color={colors.text} />
                    <Text
                        style={[styles.mapAddress, { color: colors.textHighlight }]}
                        onPress={() =>
                            // Seems like translate doesn't work on alert due to wrong type
                            Alert.alert(
                                'Öppna i kartor?',
                                'Tryck OK för att öppna addressen i kartor',
                                [
                                    {
                                        text: 'Avbryt',
                                        onPress: () => console.log('Pressed'),
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
        marginLeft: 15,
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
        marginLeft: 10,
    },
})

export default NationInfo
