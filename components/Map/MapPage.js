import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MapDarkTheme from "./MapDarkTheme.json";
import { useTheme } from "@react-navigation/native";
import RenderMapPopup from "./RenderMapInfo";

// Stores the markers context onpress
const state = {
    markers: [],
};

export default function RenderMap({ nationData }) {
    const { dark } = useTheme();
    let darkTheme = MapDarkTheme;
    let lightTheme = []; // Empty array renders standard light map
    let selectTheme = dark ? darkTheme : lightTheme;

    onMarkerPressed = (location, index) => {
        changeState(true);
        state.markers[index] = location;
        useMarkerIndex(index);
    };

    onMapPressed = () => {
        changeState(false);
    };
    const [markerPressed, changeState] = useState(false);
    const [markerIndex, useMarkerIndex] = useState(0);
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
                onPress={() => onMapPressed()}
                customMapStyle={selectTheme}
            >
                {nationData.map((marker, index) => (
                    <Marker
                        key={marker.name}
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        title={marker.name}
                        description="Aktivitetsnivå : Låg"
                        image={require("../../img/png/vdala/vdalalogga.png")}
                        onPress={() => onMarkerPressed(marker, index)}
                    ></Marker>
                ))}
            </MapView>
            {markerPressed && (
                <RenderMapPopup nation={state.markers[markerIndex]} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mapStyle: {
        zIndex: -1,
        flexWrap: "wrap",
        alignSelf: "stretch",
        backgroundColor: "white",
        height: "100%",

        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
    },
});
