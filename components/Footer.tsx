/**
 * @category Navigation
 * @module Footer
 */
import React from 'react'
import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { Nation, Event } from '@dsp-krabby/sdk'
import { useTranslation } from '../translate/LanguageContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MapScreen from '../screens/MapScreen'
import HomeScreen from '../screens/HomeScreen'
import NationScreen from '../screens/NationScreen'
import SettingsScreen from '../screens/SettingsScreen'
import NotificationScreen from '../screens/NotificationScreen'

/**
 * Defines the available route params for each tab.
 */
export type TabStackParamList = {
    Home: undefined
    Map: undefined
    Settings: undefined
    Notifications: undefined
    Nations: { nation?: Nation }
    Event: { event?: Event; nation?: Nation }
    NationHome: { nation?: Nation }
    NationMenus: { nation?: Nation }
    NationEvents: { nation?: Nation }
    NationLocationsAndHours: { nation?: Nation }
}

const Tab = createBottomTabNavigator()

/**
 * This component renders the footer in which each tab can be selected.
 * Each tab need to be entered in the footer manually.
 *
 */
const Footer = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName: any

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings-sharp' : 'settings-outline'
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    } else if (route.name === 'Nations') {
                        iconName = focused ? 'flag' : 'flag-outline'
                    } else if (route.name === 'Map') {
                        iconName = focused ? 'map' : 'map-outline'
                    }
                    return <Ionicons name={iconName} size={23} color={color} />
                },
            })}
            initialRouteName="Home"
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
            <Tab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{ title: translate.titles.notifications }}
            />
            <Tab.Screen
                name="Nations"
                component={NationScreen}
                options={{ title: translate.titles.nations }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: translate.titles.home }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{ title: translate.titles.map }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: translate.titles.settings
                }}
            />
        </Tab.Navigator>
    )
}

export default Footer
