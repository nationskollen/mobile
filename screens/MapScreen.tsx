/**
 * This component contains each screen in the Map tab.
 * @category Map
 * @module MapScreen
 */

import React from 'react'
import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { useTranslation } from '../translate/LanguageContext'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import SharedScreens from './SharedScreens'
import Map from '../components/Map/MapPage'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const MapScreen = () => {
    const { colors, isDarkMode } = useTheme()
    const { translate } = useTranslation()
    const sharedScreens = SharedScreens(Stack, translate)

    return (
        <Stack.Navigator initialRouteName="Map" screenOptions={HeaderOptions(isDarkMode, colors)}>
            <Stack.Screen
                name="Map"
                component={Map}
                options={{
                    title: translate.titles.map,
                    headerShown: false,
                }}
            />
            {sharedScreens}
        </Stack.Navigator>
    )
}

export default MapScreen
