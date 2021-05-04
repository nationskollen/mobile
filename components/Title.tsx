/**
 * Renders a simple title text component with basic styling
 * and correct colors based on the current theme.
 *
 * @category Common
 * @module Title
 */
import React from 'react'
import { useTheme } from './ThemeContext'
import { Text, TextStyle, View, ViewStyle, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    label: string
    noMargin?: boolean
    size?: 'small' | 'medium' | 'large'
    icon?: IconName
    style?: TextStyle
    containerStyle?: ViewStyle
}

const Title = ({ label, size, noMargin, icon, style, containerStyle }: Props) => {
    const { colors } = useTheme()
    let fontSize = 16

    if (size === 'small') {
        fontSize = 12
    } else if (size === 'medium') {
        fontSize = 14
    } else if (size === 'large') {
        fontSize = 18
    }

    return (
        <View style={[styles.container, { marginBottom: noMargin ? 0 : 5 }, containerStyle]}>
            {icon && (
                <Ionicons
                    name={icon}
                    size={fontSize + 2}
                    color={colors.textHighlight}
                    style={styles.icon}
                />
            )}
            <Text style={[styles.text, { fontSize, color: colors.textHighlight }, style]}>
                {label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    text: {
        fontWeight: 'bold',
    },

    icon: {
        marginRight: 5,
    },
})

export default Title