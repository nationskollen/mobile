/// This is the Home Screen
/// Renders the home screen and creates a stack to navigate between the different screens in the home page

import React from "react";
import {
    View,
    Text,
} from "react-native";

import "react-native-gesture-handler";
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/// TODO: Create a local stack
/// TODO: Import appropriate components (screens)
function MapScreen() {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Map</Text>
        </View>
    );
}

export default MapScreen;
