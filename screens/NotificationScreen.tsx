/**
 * This component contains each screen in the Notification tab
 * @category Notifications
 * @module NotificationScreen
 */
import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { useTranslation } from '../translate/LanguageContext'
import { createStackNavigator } from '@react-navigation/stack'

import NotificationList from '../components/Notifications/NotificationList'

const Stack = createStackNavigator()

const NotificationScreen = () => {
    const { colors, isDarkMode } = useTheme()
    const { translate } = useTranslation()

    return (
        <Stack.Navigator screenOptions={HeaderOptions(isDarkMode, colors)}>
            <Stack.Screen
                name="Notifications"
                component={NotificationList}
                options={{
                    title: translate.titles.notifications,
                }}
            />
        </Stack.Navigator>
    )
}

export default NotificationScreen
