/**
 * This component contains each screen in the Nations tab
 *
 * @category Nation
 * @module NationScreen
 */
import React from 'react'
import 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import HomePage from '../components/Home/HomePage'
import ChooseNation from '../components/Nations/ChooseNation'
import NationContent from '../components/Nations/NationContent'
import NavigationBackArrow from '../components/NavigationBackArrow'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const NationScreen = () => {
    const { colors } = useTheme()

    return (
        <Stack.Navigator initialRouteName="ChooseNation" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="ChooseNation"
                component={ChooseNation}
                options={{
                    title: 'Välj nation',
                }}
            />
            <Stack.Screen
                name="NationContent"
                options={{
                    title: 'Nation',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            >
                {(props) => <NationContent {...props} />}
            </Stack.Screen>
            <Stack.Screen
                name='Events'
                component={HomePage}
                options={{
                    title: 'Evenemang',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            />
        </Stack.Navigator>
    )
}

export default NationScreen
