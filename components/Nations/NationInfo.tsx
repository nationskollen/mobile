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
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from '../../translate/LanguageContext'
import { useOpeningHours, Nation, OpeningHour } from '@dsp-krabby/sdk'
import { LanguageContextType } from '../../translate/LanguageContextType'

import NationLogo from './NationLogo'

export interface Props {
    nation: Nation
    backgroundColor?: string
    paddingTop?: number
}

const TYPES = {
    DEFAULT: 0,
    EXCEPTION: 1,
}

const toDayString = (hour: OpeningHour, translate: LanguageContextType) => {
    if (hour.type === TYPES.EXCEPTION) {
        return `${hour.day_special}, ${hour.day_special_date}`
    }

    switch (hour.day) {
        case 0:
            return translate.days.monday
        case 1:
            return translate.days.tuesday
        case 2:
            return translate.days.wednesday
        case 3:
            return translate.days.thursday
        case 4:
            return translate.days.friday
        case 5:
            return translate.days.saturday
        case 6:
            return translate.days.sunday
        default:
            return 'Unknown'
    }
}

const NationInfo = ({ nation, backgroundColor, paddingTop }: Props) => {
    const { colors } = useTheme()
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
                        {openingHours ? (
                            openingHours.map((hour) => (
                                <Text
                                    key={hour.id}
                                    style={[styles.openinghoursText, { color: colors.text }]}
                                >
                                    {toDayString(hour, translate)}:{' '}
                                    {hour.is_open
                                        ? `${hour.open}-${hour.close}`
                                        : translate.map.popup.closed}
                                </Text>
                            ))
                        ) : (
                            <ActivityIndicator size="small" color={colors.primaryText} />
                        )}
                    </View>
                </View>

                <View style={styles.mapWrapper}>
                    <Ionicons name="map-outline" size={20} color={colors.text} />
                    <Text
                        style={[styles.mapAddress, { color: colors.textHighlight }]}
                        onPress={() =>
                            Alert.alert(
                                translate.nations.alerts.mapTitle,
                                translate.nations.alerts.mapDescription,
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
