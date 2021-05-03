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

import Title from '../Title'
import NationLogo from './NationLogo'

export interface Props {
    nation: Nation
    title: string
    cardBackground?: boolean
    style?: ViewStyle
    children: Element | Element[]
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
        const options: any = {
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <NationLogo src={nation.icon_img_src} size={35} spacing={6} />
                    <Title size="large" label={title} noMargin={true} style={{ marginLeft: 10 }} />
                </View>
            ),
            headerStyle: {
                backgroundColor: colors.background,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                elevation: 0,
                shadowOpacity: 0,
            },
        }

        navigation.setOptions(options)
    }, [nation, title, isDarkMode])

    return (
        <View style={[{ flex: 1, backgroundColor }, style]}>
            <FocusAwareStatusBar backgroundColor={nation.accent_color} />
            {children}
        </View>
    )
}

export default NationBasePage
