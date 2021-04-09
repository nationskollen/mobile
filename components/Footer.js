/// This component is used create the footer

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from '@react-navigation/native';

/// Screens
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import NationScreen from "../screens/NationScreen";

/// Icons
import MapScreen from "../screens/MapScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

/// The footer with each main screen
function Footer() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Hem') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Inställningar') {
                        iconName = focused ? 'settings-sharp' : 'settings-outline';
                    } else if (route.name === 'Notifikationer') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (route.name === 'Nationer') {
                        iconName = focused ? 'flag' : 'flag-outline';
                    } else if (route.name === 'Karta') {
                        iconName = focused ? 'map' : 'map-outline';
                    }

                    return <Ionicons name={iconName} size={23} color={color} />;
                }
            })}

            initialRouteName="Home" 

            tabBarOptions={{
                activeBackgroundColor: colors.primary,
                labelStyle: {
                    marginBottom: 2
                },
                tabStyle: {
                    // marginTop: 5,
                    marginVertical: 3
                },
                style: {
                    height: 85,
                },
                inactiveBackgroundColor: colors.primary,
                activeTintColor: "white",
                inactiveTintColor: "white",
            }}
        >
            <Tab.Screen name='Notifikationer' component={NotificationScreen}/>
            <Tab.Screen name="Nationer" component={NationScreen}/>
            <Tab.Screen name="Hem" component={HomeScreen}/>
            <Tab.Screen name="Karta" component={MapScreen}/>
            <Tab.Screen name="Inställningar" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

export default Footer;
