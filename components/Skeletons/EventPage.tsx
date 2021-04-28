import React from 'react'
import { View } from 'react-native'
import { useTheme } from '../ThemeContext'
import ContentLoader, { Rect } from 'react-content-loader/native'

const EventSkeletonLoader = () => {
    const { colors } = useTheme()

    return (
        <View style={{ width: '100%', aspectRatio: 100 / 70 }}>
            <ContentLoader
                height="100%"
                width="100%"
                viewBox="0 0 100 70"
                backgroundColor={colors.backgroundExtra}
                foregroundColor={colors.backgroundHighlight}
            >
                <Rect x="0" y="0" rx="4" ry="4" width="100" height="5" />
                <Rect x="0" y="8" rx="3" ry="3" width="90" height="5" />
                <Rect x="0" y="16" rx="3" ry="3" width="96" height="5" />
                <Rect x="0" y="24" rx="3" ry="3" width="100" height="5" />
                <Rect x="0" y="32" rx="3" ry="3" width="80" height="5" />
                <Rect x="0" y="44" rx="3" ry="3" width="100" height="25" />
            </ContentLoader>
        </View>
    )
}

export default EventSkeletonLoader
