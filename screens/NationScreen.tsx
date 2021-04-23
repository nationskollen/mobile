import React from 'react'
import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from '../components/Home/HomePage'
import ChooseNation from '../components/Nations/ChooseNation'
import NationContent from '../components/Nations/NationContent'
import NavigationBackArrow from '../components/NavigationBackArrow'

/// Creates a local navigation stack for this tab
const Stack = createStackNavigator()

/// The screens included in the local stack
/// Put screens relating to nations here
function NationScreen() {
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
                name="Home"
                component={HomePage}
                options={{
                    title: 'Evenemang',
                    headerLeft: () => <NavigationBackArrow />,
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default NationScreen
