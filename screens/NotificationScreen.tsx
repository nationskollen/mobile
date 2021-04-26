import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import NotificationList from '../components/Notifications/NotificationList'
import { useTranslation} from '../translate/LanguageContext';
/// Creates a local navigation stack for this tab
const Stack = createStackNavigator()

/// The screens included in the local stack
/// Put screens relating to notifications here
const NotificationScreen: React.FC = () => {
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
