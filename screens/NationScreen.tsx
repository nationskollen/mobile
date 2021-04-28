/**
 * This component contains each screen in the Nations tab
 *
 * @category Nation
 * @module NationScreen
 */

import React from 'react'
import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { useTranslation } from '../translate/LanguageContext'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import HomePage from '../components/Home/HomePage'
import NationPage from '../components/Nations/NationPage'
import ChooseNation from '../components/Nations/ChooseNation'
import NavigationBackArrow from '../components/NavigationBackArrow'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const NationScreen = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Stack.Navigator initialRouteName="ChooseNation" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="ChooseNation"
                component={ChooseNation}
                options={{
                    title: translate.nations.header,
                }}
            />
            <Stack.Screen
                name="Nation"
                component={NationPage}
                options={{
                    title: null,
                    headerTransparent: true,
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

export default NationScreen
