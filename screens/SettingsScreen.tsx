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
import LanguageRender from '../components/Settings/LanguageRender';
import { useTranslation } from '../translate/LanguageContext';

const Stack = createStackNavigator()

/// TODO: create a local navigation stack
/// TODO: factor out basically everything to a different file and replace it with a local stack navigator
function SettingsScreen({ navigation }) {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="Settings"
                component={SettingsPage}
                options={{ title: translate.settings.header}}
            />
            <Stack.Screen
                name="NotificationSettings"
                options={{
                    title: translate.notifications.header, 
                    headerLeft: () => <RenderBackArrow nav={navigation} screen={'Settings'} />,
                }}
            >
                {(_) => <NotificationSettings />}
            </Stack.Screen>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: translate.map.header, 
                    headerLeft: () => <RenderBackArrow nav={navigation} screen={'Settings'} />,
                }}
            />
             <Stack.Screen
                name= "LanguageSettings"
                component={LanguageRender}
                options={{
                    title: translate.settings.language,
                    headerLeft: () => <RenderBackArrow nav={navigation} screen={'Settings'} />,
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsScreen
