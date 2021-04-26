/**
 * This component contains each screen in the Notification tab
 * @category Notifications
 * @module NotificationScreen
 */
import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import NotificationList from '../components/Notifications/NotificationList'
import { useTranslation} from '../translate/LanguageContext';

const Stack = createStackNavigator()

const NotificationScreen = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Stack.Navigator screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="Notifications"
                component={NotificationList}
                options={{ title: translate.notifications.header}}
            />
        </Stack.Navigator>
    )
}

export default NotificationScreen
