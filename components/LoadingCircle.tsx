/**
 * @category Misc
 * @module LoadingCircle
 */
import React from 'react'
import { RefreshControl } from 'react-native'
import { useTheme } from './ThemeContext'

export interface Props {
    validating: boolean
    mutate: (...args: any) => void
    accent?: string
    [key: string]: any
}

const LoadingCircle = ({ validating, mutate, accent, ...rest }: Props) => {
    /**
     * This component renders a loading circle
     */
    const { colors, isDarkMode } = useTheme()
    const color = accent ?? colors.primaryText

    return (
        <RefreshControl
            colors={[color]}
            tintColor={color}
            progressBackgroundColor={isDarkMode ? colors.backgroundHighlight : colors.background}
            refreshing={validating}
            onRefresh={mutate}
            {...rest}
        />
    )
}

export default LoadingCircle
