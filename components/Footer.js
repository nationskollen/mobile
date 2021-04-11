/// This component is used create the footer

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from '@react-navigation/native';

/// Screens
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import NationScreen from "../screens/NationScreen";
import { useDarkMode } from './ThemeContexts';


/// Icons
import MapScreen from "../screens/MapScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
var focusTextColor;
var unFocusTextColor;
/// The footer with each main screen
function Footer() {
    const { setDarkMode, isDarkMode } = useDarkMode();
    const { colors } = useTheme();
    focusTextColor = colors.focusedText;
    unFocusTextColor = colors.unFocusedText;
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
                    marginBottom: 2,
                    fontWeight: 'bold',
                },
                tabStyle: {
                    marginBottom: 3
                },
                inactiveBackgroundColor: colors.primary,
                activeTintColor: colors.focusedText,
		inactiveTintColor: colors.unFocusedText 
            }}
        >
            <Tab.Screen name='Notifikationer' component={NotificationScreen} color = {'green'}/>
            <Tab.Screen name="Nationer" component={NationScreen}/>
            <Tab.Screen name="Hem" component={HomeScreen}/>
            <Tab.Screen name="Karta" component={MapScreen}/>
            <Tab.Screen name="Inställningar" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

export default Footer;
