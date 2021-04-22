/**
 * This component contains each screen in the Settings tab
 * @category Settings
 * @module SettingsScreen
 */
/// This is used to render Settings page and screens relating to it
import React from 'react'

/// Navigation
import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../components/Settings/Login'
import RenderBackArrow from '../assets/Icons/backArrow'
import SettingsPage from '../components/Settings/SettingsPage'
import NotificationSettings from '../components/Settings/NotificationSettings'

const Stack = createStackNavigator()


function SettingsScreen({ navigation }) {
    const { colors } = useTheme()

    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="Settings"
                component={SettingsPage}
                options={{ title: 'Inställningar' }}
            />
            <Stack.Screen
                name="NotificationSettings"
                options={{
                    title: 'Anpassa notifikationer',
                    headerLeft: () => <RenderBackArrow nav={navigation} screen={'Settings'} />,
                }}
            >
                {(_) => <NotificationSettings />}
            </Stack.Screen>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Logga in',
                    headerLeft: () => <RenderBackArrow nav={navigation} screen={'Settings'} />,
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsScreen
