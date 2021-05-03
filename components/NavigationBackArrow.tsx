/**
 * @category Navigation
 * @module NavigationBackArrow
 */
import React from 'react'
import { Animated } from 'react-native'
import { useTheme } from './ThemeContext'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from './HeaderButton'

export interface Props {
    color?: string | Animated.AnimatedInterpolation
}

const NavigationBackArrow = ({ color }: Props) => {
    const { colors } = useTheme()
    const navigation = useNavigation()

    return (
        <HeaderButton
            onPress={navigation.goBack}
            icon="arrow-back"
            iconSize={26}
            color={color ?? colors.textHighlight}
            isLeft={true}
        />
    )
}

export default NavigationBackArrow
