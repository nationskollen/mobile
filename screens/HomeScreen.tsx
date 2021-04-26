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
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import HomePage from '../components/Home/HomePage'
import NationContent from '../components/Nations/NationContent'
import { useTranslation } from '../translate/LanguageContext';
import NavigationBackArrow from '../components/NavigationBackArrow'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const HomeScreen = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation ()

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen name="Home" component={HomePage} options={{ title: 'Nationskollen' }} />
            <Stack.Screen
                name="NationContent"
                component={NationContent}
                options={{
                    title: 'Nation',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
            <Stack.Screen
                name="Events"
                component={HomePage}
                options={{
                    title: 'Evenemang',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreen
