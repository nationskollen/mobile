/// This is used to render Settings page and screens relating to it

import React from "react";

/// Navigation
import "react-native-gesture-handler";
import { HeaderOptions } from "./NavigationHeader";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "../components/Settings/SettingsPage.js";
import NotificationSettings from "../components/Settings/NotificationSettings";

const Stack = createStackNavigator();
/// TODO: create a local navigation stack
/// TODO: factor out basically everything to a different file and replace it with a local stack navigator
function SettingsScreen({ navigation }) {
    const { colors } = useTheme();

    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={HeaderOptions(colors)}
        >
            <Stack.Screen
                name="Settings"
                component={SettingsPage}
                options={{ title: "Inställningar" }}
            />
            <Stack.Screen
                name="NotificationSettings"
                component={NotificationSettings}
                options={{ title: "Anpassa notifikationer" }}
            />
        </Stack.Navigator>
    );
}

export default SettingsScreen;
