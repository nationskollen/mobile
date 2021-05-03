import React from 'react'
import { View } from 'react-native'

export interface Props {
    children: Element | Element[]
    direction?: 'row' | 'column'
}

const ContentContainer = ({ children, direction }: Props) => {
    return (
        <View style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            flex: 1,
            flexDirection: direction ?? 'column'
        }}>
            {children}
        </View>
    )
}

export default ContentContainer
