import React from 'react'
import { View, ViewStyle } from 'react-native'
import { useTheme } from '../ThemeContext'

export interface Props {
    children: Element | Element[]
    noHorizontalPadding?: boolean
    style?: ViewStyle
}

const ContentSection = ({ children, noHorizontalPadding, style }: Props) => {
    const { colors } = useTheme()

    return (
        <View
            style={[
                {
                    marginTop: 15,
                    borderBottomWidth: 1,
                    paddingHorizontal: noHorizontalPadding ? 0 : 15,
                    paddingBottom: 15,
                    borderBottomColor: colors.border,
                },
                style,
            ]}
        >
            {children}
        </View>
    )
}

export default ContentSection
