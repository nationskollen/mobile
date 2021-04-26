/**
 * This component contains each screen in the Settings tab
 * @category Settings
 * @module SettingsScreen
 */
import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import Login from '../components/Settings/Login'
import SettingsPage from '../components/Settings/SettingsPage'
import NavigationBackArrow from '../components/NavigationBackArrow'
import NotificationSettings from '../components/Settings/NotificationSettings'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const SettingsScreen = () => {
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
                    headerLeft: () => <NavigationBackArrow />,
                }}
            >
                {(_) => <NotificationSettings />}
            </Stack.Screen>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Logga in',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsScreen
