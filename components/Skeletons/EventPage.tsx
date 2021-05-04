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
                <Rect x="0" y="0" rx="2" ry="2" width="30" height="6" />
                <Rect x="0" y="9" rx="2" ry="2" width="96" height="5" />
                <Rect x="0" y="17" rx="2" ry="2" width="100" height="5" />
                <Rect x="0" y="25" rx="2" ry="2" width="80" height="5" />
                <Rect x="0" y="33" rx="2" ry="2" width="70" height="5" />
                <Rect x="0" y="41" rx="2" ry="2" width="82" height="5" />
            </ContentLoader>
        </View>
    )
}

export default EventSkeletonLoader
