import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import {useNavigation} from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MapDarkTheme from "./MapDarkTheme.json";
import { useTheme } from "@react-navigation/native";
import RenderMapPopup from './RenderMapInfo';
const state = {
    markers : [],
    coordinates: [
        {
            name: "Norrlands Nation",
            latitude: 59.856227,
            longitude: 17.6378425,
        },
        {
            name: "Stockholms Nation",
            latitude: 59.856731614930446,
            longitude: 17.63419919045771,
        },
        {
            name: "Uplands Nation",
            latitude: 59.85992220628584,
            longitude: 17.629458535888315,
        },
        {
            name: "Kalmars Nation",
            latitude: 59.859106565445636,
            longitude: 17.62706918384986,
        },
        {
            name: "Gotlands Nation",
            latitude: 59.85978279670555,
            longitude: 17.634567704542953,
        },
        {
            name: "Göteborgs Nation",
            latitude: 59.85957889713392,
            longitude: 17.63019280454616,
        },
        {
            name: "Västmanland-Dalas Nation",
            latitude: 59.86032259136127,
            longitude: 17.628939051847695,
        },
        {
            name: "Östgötas Nation",
            latitude: 59.85521276094654,
            longitude: 17.637959775927737,
        },
        {
            name: "Södermanland-Nerikes Nation",
            latitude: 59.8591482187301,
            longitude: 17.630697251271798,
        },
        {
            name: "Gästrike-Hälsinges Nation",
            latitude: 59.85656549537542,
            longitude: 17.63670148804158,
        },
        {
            name: "Västgötas Nation",
            latitude: 59.85686289838122,
            longitude: 17.638651455173623,
        },
        {
            name: "Smålands Nation",
            latitude: 59.85929959538165,
            longitude: 17.63123586514085,
        },
        {
            name: "Värmlands Nation",
            latitude: 59.85715355297,
            longitude: 17.633830648196177,
        },
    ],
};


var cock = {

    visible : false 
}
export default function RenderMap({ nationData }) {
    const { dark } = useTheme();
    let darkTheme = MapDarkTheme;
    let lightTheme = []; // Empty array renders standard light map
    let selectTheme = dark ? darkTheme : lightTheme;

    onMarkerPressed = (location, index) => {
    changeState(prevState => !prevState);
    state.markers[index] = location
    console.log(state.markers);
	changeAss(index);
    console.log(assState);
  }
  const [cockState, changeState] = useState(false);
  const [assState, changeAss] = useState(0);
    return (
	<View style = {styles.container}>
        <MapView
            style={styles.mapStyle}
            initialRegion={{
                latitude: 59.858644,
                longitude: 17.634732,
                latitudeDelta: 0.0322, // Zoom level
                longitudeDelta: 0.0321, // Zoom level
            }}
	    onPress={() => changeState(prevState => !prevState)}
            customMapStyle={selectTheme}
        >
            {nationData.map((marker, index) => (
		
                <Marker
		    key = {marker.name}
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
	    { cockState && <RenderMapPopup nation = {state.markers[assState]}/>}
	    </View>

    );
}


const styles = StyleSheet.create({
    container : {
	flex : 1
    },

    
    mapStyle: {
	zIndex : -1,
        flexWrap: "wrap",
        alignSelf: "stretch",
        backgroundColor: "white",
        height: "100%",

        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
    },
    
});
