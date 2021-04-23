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
import RenderBackArrow from '../assets/Icons/backArrow.js'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const HomeScreen = ({ navigation }: Props) => {
    const { colors } = useTheme()

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen name="Home" component={HomePage} options={{ title: 'Hem' }} />
            <Stack.Screen
                name="NationContent"
                component={NationContent}
                options={{
                    title: 'Nation',
                    headerLeft: () => <RenderBackArrow nav={navigation} screen={'Home'} />,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreen
