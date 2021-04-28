/**
 * @category Common
 * @module PrimaryButton
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, ViewStyle } from 'react-native'

import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    onPress: () => void
    label: string
    icon?: IconName
    fontSize?: number
    style?: ViewStyle
}

// Renders container that should show choose-nation content when pressed
const PrimaryButton = ({ onPress, label, icon, fontSize, style }: Props) => {
    const { colors } = useTheme()
    const actualFontSize = fontSize ?? 16
    const extraStyles = { ...style }

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.primaryHighlight}
            style={[styles.container, { backgroundColor: colors.primary, ...extraStyles }]}
        >
            <View style={styles.wrapper}>
                <Text style={[styles.text, { fontSize: actualFontSize }]}>{label}</Text>
                {icon && <Ionicons name={icon} size={actualFontSize + 4} color="white" />}
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        height: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginHorizontal: 5,
    },
})

export default PrimaryButton
