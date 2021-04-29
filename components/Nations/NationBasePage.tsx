/**
 * @category Nations
 * @module NationBasePage
 */
import { View, ViewStyle } from 'react-native'
import React, { ReactElement, useLayoutEffect } from 'react'
import { Nation } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/core'

export interface Props {
    nation: Nation
    style?: ViewStyle
    children: ReactElement | ReactElement[]
}

const NationBasePage = ({ nation, style, children }: Props) => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: false,
            headerStyle: {
                backgroundColor: nation.accent_color,
            },
        })
    }, [nation])

    return (
        <View style={style}>
            {children}
        </View>
    )
}

export default NationBasePage
