import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import Popup from './Popup'
import MapDarkTheme from './MapDarkTheme.json'

interface Props {
    data: Array<Record<string, any>>
}

// Stores the markers context onpress
const state = {
    markers: [],
}

// TODO: Add endpoint on server for fetching all locations that should be displayed on map
const mapLocations = [
    {
        id: 'norrlands',
        name: 'Norrlands Nation',
        nickname: 'Norrlands Nation',
        latitude: 59.856227,
        longitude: 17.6378425,
        logo: require('../../img/png/norrlands/norrlandslogga.png'),
    },
    {
        id: 'vdala',
        name: 'Västmanlands-Dala Nation',
        latitude: 59.86032259136127,
        longitude: 17.628939051847695,
        nickname: 'V-Dala Nation',
        logo: require('../../img/png/vdala/vdalalogga.png'),
    },
    {
        id: 'gotlands',
        name: 'Gotlands Nation',
        nickname: 'Gotlands Nation',
        latitude: 59.85978279670555,
        longitude: 17.634567704542953,
        logo: require('../../img/png/gotlands/gotlandslogga.png'),
    },
    {
        id: 'snerikes',
        name: 'Södermanlands-Nerikes Nation',
        latitude: 59.8591482187301,
        longitude: 17.630697251271798,
        nickname: 'Snerikes Nation',
        logo: require('../../img/png/snerikes/snerikeslogga.png'),
    },
    {
        id: 'kalmars',
        name: 'Kalmars Nation',
        nickname: 'Kalmars Nation',
        latitude: 59.859106565445636,
        longitude: 17.62706918384986,
        logo: require('../../img/png/kalmars/kalmarslogga.png'),
    },
    {
        id: 'ostgotas',
        name: 'Östgöta Nation',
        latitude: 59.85521276094654,
        longitude: 17.637959775927737,
        nickname: 'ÖG-Nations',
        logo: require('../../img/png/ostgotas/ostgotalogga.png'),
    },
    {
        id: 'smalands',
        name: 'Smålands Nation',
        latitude: 59.85929959538165,
        longitude: 17.63123586514085,
        nickname: 'Smålands Nation',
        logo: require('../../img/png/smalands/smalandslogga.png'),
    },
    {
        id: 'stockholms',
        latitude: 59.856731614930446,
        longitude: 17.63419919045771,
        name: 'Stockholms Nation',
        nickname: 'Stocken',
        logo: require('../../img/png/stockholms/stockholmslogga.png'),
    },
    {
        id: 'uplands',
        name: 'Uplands Nation',
        latitude: 59.85992220628584,
        longitude: 17.629458535888315,
        nickname: 'Uplands Nation',
        logo: require('../../img/png/uplands/uplandslogga.png'),
    },
    {
        id: 'varmlands',
        name: 'Värmlands Nation',
        latitude: 59.85715355297,
        longitude: 17.633830648196177,
        nickname: 'Värmlands Nation',
        logo: require('../../img/png/varmlands/varmlandslogga.png'),
    },
    {
        id: 'vastgotas',
        name: 'Västgötas Nation',
        nickname: 'Västgötas Nation',
        latitude: 59.85686289838122,
        longitude: 17.638651455173623,
        logo: require('../../img/png/vastgotas/vastgotalogga.png'),
    },
    {
        id: 'goteborgs',
        name: 'Göteborgs Nation',
        latitude: 59.85957889713392,
        longitude: 17.63019280454616,
        nickname: 'Göteborgs Nation',
        logo: require('../../img/png/goteborgs/goteborglogga.png'),
    },
    {
        id: 'ghs',
        name: 'Gästrike-Hälsinglands Nation',
        latitude: 59.85656549537542,
        longitude: 17.63670148804158,
        nickname: 'GH',
        logo: require('../../img/png/ghs/ghlogga.png'),
    },
]

const Map: React.FC<Props> = () => {
    const { isDarkMode } = useTheme()
    const [markerIndex, setMarkerIndex] = useState(0)
    const [markerPressed, setPressed] = useState(false)

    // Empty array renders standard light map
    const theme = isDarkMode ? MapDarkTheme : []

    const onMarkerPressed = (location: any, index: number) => {
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
                {mapLocations.map((marker, index) => (
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
                    />
                ))}
            </MapView>
            {markerPressed && <Popup nation={state.markers[markerIndex]} />}
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
