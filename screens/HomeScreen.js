/// This is the Home Screen
/// Renders the home screen and creates a stack to navigate between the different screens in the home page

import React from "react";

import "react-native-gesture-handler";
import { HeaderOptions } from "./NavigationHeader";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../components/Home/HomePage";
import NationContent from "../components/Nations/NationContent";

const Stack = createStackNavigator();
/// TODO: Create a local stack
/// TODO: Import appropriate components (screens)
function HomeScreen() {
    const { colors } = useTheme();

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={HeaderOptions(colors)}
        >
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ title: "Hem" }}
            />

            <Stack.Screen
                name="NationContent"
                component={NationContent}
                options={{ title: "Nation" }}
            />
        </Stack.Navigator>
    );
}

export default HomeScreen;
