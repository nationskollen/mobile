/**
 * This component contains each screen in the Map tab.
 * @category Map
 * @module MapScreen
 */

import React from 'react'
import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import Map from '../components/Map/MapPage'
import HomePage from '../components/Home/HomePage'
import NationPage from '../components/Nations/NationPage'
import { useTranslation } from '../translate/LanguageContext'
import NavigationBackArrow from '../components/NavigationBackArrow'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const MapScreen = () => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Stack.Navigator initialRouteName="Map" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="Map"
                component={Map}
                options={{ headerShown: false, title: translate.map.header }}
            />
            <Stack.Screen
                name="Nation"
                options={{
                    title: null,
                    headerTransparent: true,
                    headerLeft: () => <NavigationBackArrow />,
                }}
            >
                {(props) => <NationPage {...props} />}
            </Stack.Screen>
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

export default MapScreen
