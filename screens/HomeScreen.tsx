/**
 * This component contains each screen in the Home tab.
 * Renders the home screen and creates a stack to navigate between the different screens in the home page.
 * @param navigation Used to navigate between screens
 * @category Home
 * @module HomeScreen
 */

import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { useTranslation } from '../translate/LanguageContext'
import { createStackNavigator } from '@react-navigation/stack'

import SharedScreens from './SharedScreens'
import HomePage from '../components/Home/HomePage'
import EventPage from '../components/Events/EventPage'
import NavigationBackArrow from '../components/NavigationBackArrow'

const Stack = createStackNavigator()

const HomeScreen = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()
    const sharedScreens = SharedScreens(Stack, translate)

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: 'Nationskollen'
                }}
            />
            <Stack.Screen
                name="Events"
                component={HomePage}
                options={{
                    title: translate.titles.events,
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
            <Stack.Screen
                name="Event"
                component={EventPage}
                options={{
                    title: translate.titles.event,
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
            {sharedScreens}
        </Stack.Navigator>
    )
}

export default HomeScreen
