import React from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    icon: IconName
    onPress: () => void
    iconSize?: number
    isLeft?: boolean
}

const HeaderButton = ({ icon, iconSize, onPress, isLeft }: Props) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor="rgba(255, 255, 255, 0.15)"
            style={[styles.button, { marginLeft: isLeft ? 5 : 0, marginRight: isLeft ? 0 : 5 }]}
        >
            <Ionicons size={iconSize ?? 24} color="white" name={icon} />
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
