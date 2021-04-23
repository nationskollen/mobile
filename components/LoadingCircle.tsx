import React from 'react'
import { RefreshControl } from 'react-native'
import { useTheme } from './ThemeContext'

export interface Props {
    validating: boolean
    mutate: (...args: any) => void
    [key: string]: any
}

const LoadingCircle = ({ validating, mutate, ...rest }: Props) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <RefreshControl
            colors={[colors.primaryText]}
            tintColor={colors.primaryText}
            progressBackgroundColor={isDarkMode ? colors.backgroundHighlight : colors.background}
            refreshing={validating}
            onRefresh={mutate}
            {...rest}
        />
    )
}

export default LoadingCircle
