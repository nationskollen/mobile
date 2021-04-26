/**
 * @category Navigation
 * @module Footer
 */
import React from 'react'
import { Nation } from '@dsp-krabby/sdk'
import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation} from '../translate/LanguageContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MapScreen from '../screens/MapScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import NotificationScreen from '../screens/NotificationScreen'
import NationScreen from '../screens/NationScreen'

/**
 * Defines the available route params for each tab.
 */
export type TabStackParamList = {
    Hem: { oid?: number; hideNationFilter?: boolean }
    Inställningar: undefined
    Notifikationer: undefined
    Nationer: { nation?: Nation }
    Karta: undefined
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
            <Tab.Screen name={translate.notifications.header}  component={NotificationScreen} />
            <Tab.Screen name={translate.nations.header} component={NationScreen} />
            <Tab.Screen name={translate.home.header}component={HomeScreen} />
            <Tab.Screen name={translate.map.header} component={MapScreen} />
            <Tab.Screen name={translate.settings.header}component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default Footer
