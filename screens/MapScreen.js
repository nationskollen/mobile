/// This is the Home Screen
/// Renders the home screen and creates a stack to navigate between the different screens in the home page

import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Platform,
    TextInput,
} from "react-native";

import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from '../components/Home/HomePage';

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
