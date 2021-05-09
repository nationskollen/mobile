/**
 * @category Map
 * @module MapPage
 */
import React, { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { View, StyleSheet } from 'react-native'
import { useNations, Nation } from '@nationskollen/sdk'
import { useTranslation } from '../../translate/LanguageContext'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import Popup from './Popup'
import MapDarkTheme from './MapDarkTheme.json'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'

const Map = () => {
    const { data: nations } = useNations()
    const { translate } = useTranslation()
    const { colors, isDarkMode } = useTheme()
    const [showPopup, setShowPopup] = useState(false)
    const [selectedNation, setSelectedNation] = useState<Nation | null>(null)

    // Empty array renders standard light map
    const theme = isDarkMode ? MapDarkTheme : []

    const onMarkerPressed = (nation: Nation) => {
        setShowPopup(true)
        setSelectedNation(nation)
    }

    const onMapPressed = () => {
        // Skip resetting of selected nation so that
        // the animation actually plays out.
        // If we set it to null, the content will be removed
        // and the height of the popup will be 0 => no animation.
        setShowPopup(false)
    }

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 59.858644,
                    longitude: 17.634732,
                    latitudeDelta: 0.0322, // Zoom level
                    longitudeDelta: 0.0321, // Zoom level
                }}
                onPress={onMapPressed}
                customMapStyle={theme}
                provider={PROVIDER_GOOGLE}
                pitchEnabled={false}
                loadingBackgroundColor={colors.background}
                loadingIndicatorColor={colors.primaryText}
                rotateEnabled={false}
            >
                {nations &&
                    nations.map((nation) => {
                        const { default_location } = nation

                        if (!default_location) {
                            return null
                        }

                        return (
                            <Marker
                                key={nation.default_location.id}
                                coordinate={{
                                    latitude: default_location.latitude,
                                    longitude: default_location.longitude,
                                }}
                                pinColor={nation.accent_color}
                                title={default_location.name}
                                description={`${translate.map.currentActivityLevel}: ${
                                    translate.activityLevels[default_location.activity_level]
                                }`}
                                onPress={() => onMarkerPressed(nation)}
                                stopPropagation={true}
                                tracksViewChanges={false}
                            />
                        )
                    })}
            </MapView>
            <Popup nation={selectedNation} show={showPopup} setShow={setShowPopup} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        height: '100%',
    },
})

export default Map
