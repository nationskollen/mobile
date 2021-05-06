/**
 * @category Misc
 * @module LoadingCircle
 */
import React, { useEffect, useState } from 'react'
import { RefreshControl } from 'react-native'
import { useTheme } from '../ThemeContext'

export interface Props {
    validating: boolean
    mutate: (...args: any) => void
    accent?: string
    tint?: string
    offsetTop?: number
    skipIndicatorDelay?: boolean
    [key: string]: any
}

/**
 * Defines the max amount of time that will be waited
 * before the refresh indicator will be shown on load.
 *
 * Using this, we can make sure that the indicator is not visible
 * if data is fetched from the cache on initial render. This will
 * prevent the janky effect where the indicator is shown for a split-second
 * and (on iOS) displaces the content.
 */
const CACHE_LOOKUP_MAX_TIME = 750

const LoadingCircle = ({
    validating,
    mutate,
    accent,
    tint,
    offsetTop,
    skipIndicatorDelay,
    ...rest
}: Props) => {
    /**
     * This component renders a loading circle
     */
    const { colors } = useTheme()
    const [hideIndicator, setHideIndicator] = useState(skipIndicatorDelay ?? true)
    const color = accent ?? colors.primaryText

    /**
     * Hide refresh indicator on mount in case
     * the data is already present in the cache.
     */
    useEffect(() => {
        if (skipIndicatorDelay) {
            return
        }

        const timer = setTimeout(() => {
            setHideIndicator(false)
        }, CACHE_LOOKUP_MAX_TIME)

        return () => clearTimeout(timer)
    }, [])

    return (
        <RefreshControl
            colors={[color]}
            tintColor={tint ?? color}
            progressBackgroundColor={colors.background}
            refreshing={hideIndicator ? false : validating}
            onRefresh={mutate}
            progressViewOffset={offsetTop ?? 0}
            {...rest}
        />
    )
}

export default LoadingCircle
