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
import RenderBackArrow from '../assets/Icons/backArrow'
import SettingsPage from '../components/Settings/SettingsPage'
import NotificationSettings from '../components/Settings/NotificationSettings'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const SettingsScreen = ({ navigation }: Props) => {
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
