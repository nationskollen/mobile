import React from 'react'
import { View, ViewStyle } from 'react-native'

export interface Props {
    children: Element | Element[]
    direction?: 'row' | 'column'
    noPaddingTop?: boolean
    style?: ViewStyle
}

const ContentContainer = ({ children, direction, noPaddingTop, style }: Props) => {
    return (
        <View
            style={[
                {
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    paddingTop: noPaddingTop ? 0 : 15,
                    flex: 1,
                    flexDirection: direction ?? 'column',
                },
                style,
            ]}
        >
            {children}
        </View>
    )
}

export default ContentContainer
