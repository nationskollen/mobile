/** 
 * @category Misc
 * @module LoadingCircle
 */
import React from 'react'
import { RefreshControl } from 'react-native'
import { useTheme } from './ThemeContext'

interface Props {
    validating: boolean
    mutate: (...args: any) => void
    [key: string]: any
}

/** 
 * This component renders a loading circle
 */
export const LoadingCircle: React.FC<Props> = ({ validating, mutate, ...rest }) => {
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
