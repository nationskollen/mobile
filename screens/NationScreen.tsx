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

import SharedScreens from './SharedScreens'
import NationsPage from '../components/Nations/Front/NationsPage'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const Stack = createStackNavigator()

const NationScreen = () => {
    const { colors, isDarkMode } = useTheme()
    const { translate } = useTranslation()
    const sharedScreens = SharedScreens(Stack, translate)

    return (
        <Stack.Navigator
            initialRouteName="Nations"
            screenOptions={HeaderOptions(isDarkMode, colors)}
        >
            <Stack.Screen
                name="Nations"
                component={NationsPage}
                options={{
                    title: translate.titles.chooseNation,
                    headerTitleStyle: {
                        fontFamily: 'NotoSans',
                        fontWeight: 'bold',
                    },
                }}
            />
            {sharedScreens}
        </Stack.Navigator>
    )
}

export default NationScreen
