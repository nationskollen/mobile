/**
 * @category Nations
 * @module Location
 */
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { Location as LocationReponse } from '@dsp-krabby/sdk'
import { useTranslation } from '../../translate/LanguageContext'

import Card from '../Card'
import Title from '../Title'
import Button from '../Button'
import CoverImage from '../CoverImage'
import OpeningHours from './OpeningHours'
import ActivityLevel from './ActivityLevel'

export interface Props {
    location: LocationReponse
    accentColor: string
}

const Location = ({ location, accentColor }: Props) => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Card>
            <View style={styles.activityContainer}>
                <ActivityLevel location={location} />
            </View>
            <CoverImage
                src={location.cover_img_src}
                height={175}
                fallbackIcon="location"
                overlayColor={accentColor}
            />
            <View style={styles.contentContainer}>
                <Title size="large" label={location.name} />
                <Title size="medium" label={location.address} />
                <Text style={{ color: colors.text }}>{location.description}</Text>
                <View style={[styles.openingHoursContainer, { borderColor: colors.border }]}>
                    <View style={{ marginBottom: 15 }}>
                        <View style={styles.labelContainer}>
                            <Ionicons
                                name="time-outline"
                                size={20}
                                color={colors.text}
                                style={styles.labelIcon}
                            />
                            <Text style={[styles.openingHourLabel, { color: colors.text }]}>
                                {translate.location.regularOpeningHours}
                            </Text>
                        </View>
                        <OpeningHours hours={location.opening_hours} />
                    </View>
                    <View>
                        <View style={styles.labelContainer}>
                            <Ionicons
                                name="information-circle-outline"
                                size={20}
                                color={colors.text}
                                style={styles.labelIcon}
                            />
                            <Text style={[styles.openingHourLabel, { color: colors.text }]}>
                                {translate.location.exceptionOpeningHours}
                            </Text>
                        </View>
                        <OpeningHours hours={location.opening_hour_exceptions} />
                    </View>
                </View>
                <Button
                    type="light"
                    label={translate.location.showOnMap}
                    icon="chevron-forward"
                    onPress={() => console.log('Not implemented')}
                />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        position: 'absolute',
        top: 10,
        right: 0,
        zIndex: 2,
    },

    contentContainer: {
        padding: 15,
        paddingBottom: 0,
    },

    openingHoursContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginVertical: 15,
    },

    openingHourLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    labelContainer: {
        flexDirection: 'row',
    },

    labelIcon: {
        marginRight: 5,
    },
})

export default Location
