/**
 * Creates a base page that automatically sets the navigation
 * header background to the nation accent color.
 *
 * It also sets the status bar to a matching accent color.
 *
 * @category Nations
 * @module NationBasePage
 */
import { View, ViewStyle } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Nation } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'
import { useNavigation } from '@react-navigation/core'
import FocusAwareStatusBar from '../FocusAwareStatusBar'

export interface Props {
    nation: Nation
    style?: ViewStyle
    children: Element | Element[]
}

const NationBasePage = ({ nation, style, children }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: false,
            headerStyle: {
                backgroundColor: nation.accent_color,
            },
        })
    }, [nation])

    return (
        <View
            style={[
                {
                    flex: 1,
                    backgroundColor: isDarkMode ? colors.background : colors.backgroundExtra,
                },
                style,
            ]}
        >
            <FocusAwareStatusBar backgroundColor={nation.accent_color} />
            {children}
        </View>
    )
}

export default NationBasePage
