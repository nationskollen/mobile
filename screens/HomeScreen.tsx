/**
 * This component contains each screen in the Home tab.
 * Renders the home screen and creates a stack to navigate between the different screens in the home page.
 * @param navigation Used to navigate between screens
 * @category Home
 * @module HomeScreen
 */

import React from 'react'

import 'react-native-gesture-handler'
import { Nation } from '@dsp-krabby/sdk'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from '../components/Home/HomePage'
import EventPage from '../components/Home/EventPage'
import NationContent from '../components/Nations/NationContent'
import NavigationBackArrow from '../components/NavigationBackArrow'

/**
 * Defines the available route params for each screen
 */
export type HomeStackParamList = {
    NationContent: { nation: Nation }
}

const Stack = createStackNavigator()

const HomeScreen = () => {
    const { colors } = useTheme()

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen name='Home' component={HomePage} options={{ title: 'Nationskollen' }} />
            <Stack.Screen
                name='NationContent'
                component={NationContent}
                options={{
                    title: 'Nation',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
            <Stack.Screen
                name='Events'
                component={HomePage}
                options={{
                    title: 'Evenemang',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
            <Stack.Screen
                name='Event'
                component={EventPage}
                options={{
                    title: 'Event',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreen
