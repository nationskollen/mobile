/// This is used to render Settings page and screens relating to it

import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Button,
    PickerIOSComponent,
    StatusBar,
} from "react-native";

/// Navigation
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";


import { FontAwesome } from "@expo/vector-icons";
import SettingsPage from "../components/Settings/SettingsPage.js";

const Stack = createStackNavigator();
/// TODO: create a local navigation stack
/// TODO: factor out basically everything to a different file and replace it with a local stack navigator
function SettingsScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Settings"
                component={SettingsPage}
            />
        </Stack.Navigator>
    )
}
    
export default SettingsScreen;
