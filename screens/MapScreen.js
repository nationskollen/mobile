/// This is the Home Screen
/// Renders the home screen and creates a stack to navigate between the different screens in the home page

import React from "react";
import { View, Text } from "react-native";

import "react-native-gesture-handler";
import { HeaderOptions } from "./NavigationHeader";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import renderMap from "../components/Map/MapPage.js";

const Stack = createStackNavigator();

/// TODO: Create a local stack
/// TODO: Import appropriate components (screens)
function MapScreen() {
    const { colors } = useTheme();

    return (
<<<<<<< HEAD
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Map</Text>
        </View>
=======
        <Stack.Navigator
            initialRouteName="Map"
            screenOptions={HeaderOptions(colors)}
        >
            <Stack.Screen
                name="Map"
                component={renderMap}
                options={{ title: "Karta" }}
            />
        </Stack.Navigator>
>>>>>>> map
    );
}

export default MapScreen;
