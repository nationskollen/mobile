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
    title?: string
    cardBackground?: boolean
    style?: ViewStyle
    children: Element | Element[]
}

export interface ScreenOptions {
    title?: string
    headerTransparent: boolean
    headerStyle: {
        backgroundColor: string
    }
}

const NationBasePage = ({ nation, title, cardBackground, style, children }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const navigation = useNavigation()
    const backgroundColor = cardBackground
        ? isDarkMode
            ? colors.background
            : colors.backgroundExtra
        : colors.background

    useLayoutEffect(() => {
        const options: ScreenOptions = {
            headerTransparent: false,
            headerStyle: {
                backgroundColor: nation.accent_color,
            },
        }

        if (title) {
            options.title = title
        }

        navigation.setOptions(options)
    }, [nation, title])

    return (
        <View style={[{ flex: 1, backgroundColor }, style]}>
            <FocusAwareStatusBar backgroundColor={nation.accent_color} />
            {children}
        </View>
    )
}

export default NationBasePage
