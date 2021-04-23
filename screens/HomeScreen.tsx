/// This is the Home Screen
/// Renders the home screen and creates a stack to navigate between the different screens in the home page
import React from 'react'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from '../components/Home/HomePage'
import NationContent from '../components/Nations/NationContent'
import NavigationBackArrow from '../components/NavigationBackArrow'

const Stack = createStackNavigator()

const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme()

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen name="Home" component={HomePage} options={{ title: 'Nationskollen' }} />
            <Stack.Screen
                name="NationContent"
                component={NationContent}
                options={{
                    title: 'Nation',
                    headerLeft: () => <NavigationBackArrow navigation={navigation} screen={'Home'} />,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreen
