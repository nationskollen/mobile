import React from 'react'
import { Animated, TouchableHighlight, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    icon: IconName
    onPress: () => void
    color?: string | Animated.AnimatedInterpolation
    iconSize?: number
    isLeft?: boolean
}

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons)

const HeaderButton = ({ icon, iconSize, onPress, color, isLeft }: Props) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor="rgba(255, 255, 255, 0.15)"
            style={[styles.button, { marginLeft: isLeft ? 5 : 0, marginRight: isLeft ? 0 : 5 }]}
        >
            <AnimatedIcon size={iconSize ?? 24} name={icon} style={{ color }} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default HeaderButton
