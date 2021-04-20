import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import MapPopup from './Popup'
import MapDarkTheme from './MapDarkTheme.json'

interface Props {
    data: Array<Record<string, any>>
}

// Stores the markers context onpress
const state = {
    markers: [],
}

const Map: React.FC<Props> = () => {
    const { isDarkMode } = useTheme()
    const [markerIndex, setMarkerIndex] = useState(0)
    const [markerPressed, setPressed] = useState(false)

    // Empty array renders standard light map
    const theme = isDarkMode ? MapDarkTheme : []

    const onMarkerPressed = (location, index) => {
        state.markers[index] = location
        setPressed(true)
        setMarkerIndex(index)
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 59.858644,
                    longitude: 17.634732,
                    latitudeDelta: 0.0322, // Zoom level
                    longitudeDelta: 0.0321, // Zoom level
                }}
                onPress={() => setPressed(false)}
                customMapStyle={theme}
                provider={PROVIDER_GOOGLE}
            >
                {data.map((marker, index) => (
                    <Marker
                        key={marker.name}
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        title={marker.name}
                        description="Aktivitetsnivå: Låg"
                        image={require('../../img/png/vdala/vdalalogga.png')}
                        onPress={() => onMarkerPressed(marker, index)}
                    ></Marker>
                ))}
            </MapView>
            {markerPressed && <MapPopup nation={state.markers[markerIndex]} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mapStyle: {
        zIndex: -1,
        flexWrap: 'wrap',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        height: '100%',

        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
    },
})

export default Map
