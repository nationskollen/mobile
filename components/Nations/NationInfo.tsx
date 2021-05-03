/**
 * Renders a short description of a nation and its default location.
 * Mainly used in the map popup.
 *
 * @category Nation
 * @module NationInfo
 */
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { useOpeningHours, Nation } from '@dsp-krabby/sdk'
import { useTranslation } from '../../translate/LanguageContext'

import NationLogo from './NationLogo'
import OpeningHours from './OpeningHours'

export interface Props {
    nation: Nation
    backgroundColor?: string
    paddingTop?: number
}

const NationInfo = ({ nation, backgroundColor, paddingTop }: Props) => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const { translate } = useTranslation()
    const { id, address } = nation.default_location
    const { data: openingHours } = useOpeningHours(id)

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
            <TouchableOpacity
                style={styles.nationNameWrapper}
                onPress={() => navigation.navigate('NationHome', { oid: nation.oid })}
            >
                <NationLogo src={nation.icon_img_src} size={50} />
                <Text style={[styles.nationName, { color: colors.textHighlight }]}>
                    {nation.name}
                </Text>
            </TouchableOpacity>

            <View style={styles.descriptionWrapper}>
                <View style={[styles.clockSymbolWrapper]}>
                    <Ionicons name="time-outline" size={20} color={colors.text} />
                    <Text style={[styles.openinghoursTitle, { color: colors.textHighlight }]}>
                        {translate.titles.nationLocationAndHours}
                    </Text>
                </View>

                <View style={styles.openinghoursWrapper}>
                    <View style={[styles.lineSymbol, { backgroundColor: colors.text }]}></View>
                    <OpeningHours hours={openingHours} />
                </View>

                <View style={styles.mapWrapper}>
                    <Ionicons name="map-outline" size={20} color={colors.text} />
                    <Text
                        style={[styles.mapAddress, { color: colors.textHighlight }]}
                        onPress={() =>
                            Alert.alert(
                                translate.alerts.showOnMapTitle,
                                translate.alerts.showOnMapDescription,
                                [
                                    {
                                        text: translate.general.cancel,
                                        onPress: () => console.log('Pressed'),
                                    },
                                    {
                                        text: translate.general.ok,
                                        onPress: () => console.log('OK Pressed'),
                                    },
                                ],
                                {
                                    cancelable: true,
                                }
                            )
                        }
                    >
                        {address}
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
        width: '100%',
        marginTop: 6,
    },

    openinghoursTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
    },

    clockSymbolWrapper: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
    },

    lineSymbol: {
        marginLeft: 8,
        marginRight: 22,
        width: 1,
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
