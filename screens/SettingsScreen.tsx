/**
 * This component contains each screen in the Settings tab
 * @category Settings
 * @module SettingsScreen
 */
import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import TitleOffsetOptions from './TitleOffsetOptions'
import { useTranslation } from '../translate/LanguageContext'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import LoginPage from '../components/Settings/LoginPage'
import AboutUsPage from '../components/Settings/AboutUsPage'
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
                options={{
                    title: translate.titles.settings,
                }}
            />
            <Stack.Screen
                name="NotificationSettings"
                component={NotificationSettings}
                options={{
                    title: translate.titles.customizeNotificaitions,
                    headerLeft: () => <NavigationBackArrow />,
                    ...TitleOffsetOptions,
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                    title: translate.titles.login,
                    headerLeft: () => <NavigationBackArrow />,
                    ...TitleOffsetOptions,
                }}
            />
            <Stack.Screen
                name="LanguageSettings"
                component={LanguagePage}
                options={{
                    title: translate.titles.language,
                    headerLeft: () => <NavigationBackArrow />,
                    ...TitleOffsetOptions,
                }}
            />
            <Stack.Screen
                name="AboutUs"
                component={AboutUsPage}
                options={{
                    title: translate.titles.aboutUs,
                    headerLeft: () => <NavigationBackArrow />,
                    ...TitleOffsetOptions,
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsScreen
