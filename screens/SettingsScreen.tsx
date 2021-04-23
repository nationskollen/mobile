/// This is used to render Settings page and screens relating to it
import React from 'react'

/// Navigation
import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../components/Settings/Login'
import SettingsPage from '../components/Settings/SettingsPage'
import NavigationBackArrow from '../components/NavigationBackArrow'
import NotificationSettings from '../components/Settings/NotificationSettings'

const Stack = createStackNavigator()

/// TODO: create a local navigation stack
/// TODO: factor out basically everything to a different file and replace it with a local stack navigator
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
                    headerLeft: () => <NavigationBackArrow navigation={navigation} screen='Settings' />,
                }}
            >
                {(_) => <NotificationSettings />}
            </Stack.Screen>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Logga in',
                    headerLeft: () => <NavigationBackArrow navigation={navigation} screen='Settings' />,
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsScreen
