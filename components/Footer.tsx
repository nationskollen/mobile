/**
 * @category Navigation
 * @module Footer
 */
import React from 'react'
import { useTheme } from './ThemeContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/// Screens
import MapScreen from '../screens/MapScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import NotificationScreen from '../screens/NotificationScreen'
import NationScreen from '../screens/NationScreen'

/// Icons
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

/// The footer with each main screen
/** 
 * This component renders the footer in which each tab can be selected.
 * Each tab need to be entered in the footer manually.
 *
 */
export const Footer: React.FC = () => {
    const { colors } = useTheme()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName: any

                    if (route.name === 'Hem') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Inställningar') {
                        iconName = focused ? 'settings-sharp' : 'settings-outline'
                    } else if (route.name === 'Notifikationer') {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    } else if (route.name === 'Nationer') {
                        iconName = focused ? 'flag' : 'flag-outline'
                    } else if (route.name === 'Karta') {
                        iconName = focused ? 'map' : 'map-outline'
                    }
                    return <Ionicons name={iconName} size={23} color={color} />
                },
            })}
            initialRouteName="Hem"
            tabBarOptions={{
                activeBackgroundColor: colors.background,
                labelStyle: {
                    marginBottom: 2,
                    fontWeight: 'bold',
                },
                tabStyle: {
                    marginBottom: 3,
                },
                inactiveBackgroundColor: colors.background,
                activeTintColor: colors.text,
                inactiveTintColor: colors.unFocusedText,
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen name="Notifikationer" component={NotificationScreen} />
            <Tab.Screen name="Nationer" component={NationScreen} />
            <Tab.Screen name="Hem" component={HomeScreen} />
            <Tab.Screen name="Karta" component={MapScreen} />
            <Tab.Screen name="Inställningar" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default Footer
