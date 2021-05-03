/**
 * @category Navigation
 * @module NavigationBackArrow
 */
import React from 'react'
import { Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from './HeaderButton'

export interface Props {
    color?: string | Animated.AnimatedInterpolation
}

const NavigationBackArrow = ({ color }: Props) => {
    const navigation = useNavigation()

    return (
        <HeaderButton
            onPress={navigation.goBack}
            icon="arrow-back"
            iconSize={26}
            color={color ?? 'white'}
            isLeft={true}
        />
    )
}

export default NavigationBackArrow
