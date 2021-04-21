/// This is the home for nations
/// Renders start page for nations
import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

/// Pages to move to and from
import ChooseNation from '../components/Nations/ChooseNation'
import NationContent from '../components/Nations/NationContent'
import HomePage from '../components/Home/HomePage'

/// Icons
import { Ionicons } from '@expo/vector-icons'
import RenderBackArrow from '../assets/Icons/backArrow.js'

/// Creates a local navigation stack for this tab
const Stack = createStackNavigator()

/// The screens included in the local stack
/// Put screens relating to nations here
function NationScreen({ navigation }) {
    const { colors } = useTheme()

    return (
        <Stack.Navigator
            initialRouteName="ChooseNation"
            screenOptions={HeaderOptions(colors)}
        >
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
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('ChooseNation')}
                            style={{ marginLeft: 15 }}
                        />
                    ),
                }}
            >
                {(props) => <NationContent {...props} />}
            </Stack.Screen>

            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: 'Evenemang',
                    headerLeft: () => <RenderBackArrow nav={navigation} screen={'NationContent'} />,
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default NationScreen
