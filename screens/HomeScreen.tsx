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
import TitleOffsetOptions from './TitleOffsetOptions'
import NavigationBackArrow from '../components/Header/NavigationBackArrow'

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
                    title: 'Nationskollen',
                }}
            />
            <Stack.Screen
                name="Events"
                component={HomePage}
                options={{
                    title: translate.titles.events,
                    headerLeft: () => <NavigationBackArrow />,
                    ...TitleOffsetOptions,
                }}
            />
            {sharedScreens}
        </Stack.Navigator>
    )
}

export default HomeScreen
