/**
 * This component contains each screen in the Settings tab
 * @category Settings
 * @module SettingsScreen
 */
import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { useTranslation } from '../translate/LanguageContext'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import LoginPage from '../components/Settings/LoginPage'
import SettingsPage from '../components/Settings/SettingsPage'
import LanguagePage from '../components/Settings/LanguagePage'
import NavigationBackArrow from '../components/NavigationBackArrow'
import NotificationSettings from '../components/Settings/NotificationSettings'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const SettingsScreen = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="Settings"
                component={SettingsPage}
                options={{ title: translate.settings.header }}
            />
            <Stack.Screen
                name="NotificationSettings"
                options={{
                    title: translate.settings.notificationsetting.header, 
                    headerLeft: () => <NavigationBackArrow />,
                }}
            >
                {(_) => <NotificationSettings />}
            </Stack.Screen>
            <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                    title: translate.settings.login,
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
            <Stack.Screen
                name="LanguageSettings"
                component={LanguagePage}
                options={{
                    title: translate.settings.language,
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsScreen
