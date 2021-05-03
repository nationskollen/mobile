/**
 * Renders a single location of a nation.
 * Displays the address, description, opening hours and subscribes
 * to activity level changes. It also provides a button that allows
 * you to navigate to the location using your map app of choice.
 *
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
import CoverImage from '../CoverImage'
import OpeningHours from './OpeningHours'
import ActivityLevel from './ActivityLevel'
import ContentContainer from '../ContentContainer'
import ShowLocationButton from '../Map/ShowLocationButton'

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
            <ContentContainer>
                <Title size="large" label={location.name} />
                <Title size="medium" label={location.address} icon="location-outline" />
                <Text style={{ color: colors.text }}>{location.description}</Text>
                <View style={[styles.openingHoursContainer, { borderColor: colors.border }]}>
                    <Title label={translate.location.regularOpeningHours} icon="time-outline" />
                    <OpeningHours hours={location.opening_hours} />
                    {location.opening_hour_exceptions.length > 0 && (
                        <View style={{ marginTop: 15 }}>
                            <Title
                                label={translate.location.exceptionOpeningHours}
                                icon="information-circle-outline"
                            />
                            <OpeningHours hours={location.opening_hour_exceptions} />
                        </View>
                    )}
                </View>
                {location.latitude && location.longitude && (
                    <View style={[styles.navigationContainer, { borderColor: colors.border }]}>
                        <ShowLocationButton type="light" location={location} />
                    </View>
                )}
            </ContentContainer>
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
        paddingTop: 15,
        marginTop: 15,
    },

    navigationContainer: {
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
    },
})

export default Location
