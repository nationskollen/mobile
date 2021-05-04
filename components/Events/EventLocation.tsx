import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useLocation, Nation } from '@dsp-krabby/sdk'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/core'
import { useTranslation } from '../../translate/LanguageContext'

import Card from '../Common/Card'
import Title from '../Common/Title'
import CoverImage from './CoverImage'
import ContentSection from '../Common/ContentSection'

export interface Props {
    nation: Nation
    locationId?: number
}

const EventLocation = ({ nation, locationId }: Props) => {
    // Skip rendering if the event does not have a location
    if (!locationId) {
        return null
    }

    const navigation = useNavigation()
    const { translate } = useTranslation()
    const { data } = useLocation(locationId)

    return (
        <ContentSection noHorizontalPadding={true}>
            <Title label={translate.event.location} size="large" style={{ marginLeft: 15 }} />
            <Card
                onPress={() => data && navigation.navigate('NationLocationsAndHours', { nation })}
            >
                {data ? (
                    <>
                        <CoverImage src={data.cover_img_src} />
                        <LinearGradient
                            colors={['transparent', nation.accent_color]}
                            style={styles.overlay}
                        />
                        <View style={styles.contentContainer}>
                            <Title label={data.name} color="white" noMargin={true} />
                            <Text style={{ color: '#f4f4f4' }}>{data.address}</Text>
                        </View>
                        <View style={styles.showLabel}>
                            <View
                                style={[
                                    styles.showButton,
                                    { backgroundColor: nation.accent_color },
                                ]}
                            >
                                <Ionicons name="chevron-forward" size={24} color="white" />
                            </View>
                        </View>
                    </>
                ) : (
                    <ActivityIndicator size="large" color={nation.accent_color} />
                )}
            </Card>
        </ContentSection>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingLeft: 10,
        paddingBottom: 10,
        zIndex: 2,
    },

    overlay: {
        position: 'absolute',
        bottom: -25,
        left: 0,
        height: 200,
        width: '100%',
        zIndex: 1,
    },

    showLabel: {
        zIndex: 2,
        position: 'absolute',
        right: 10,
        top: 10,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    showButton: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },
})

export default EventLocation
