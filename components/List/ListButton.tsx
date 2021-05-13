/**
 * @category Misc
 * @module ListButton
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'

import Title from '../Common/Title'

export interface Props {
    title: string
    onPress: () => void
    leftIcon: Element
    rightIcon?: Element
    borderTop?: boolean
}

/**
 * This component renders a clickable header with an icon to the left and an optional icon to the right in the header
 */
const ListButton = ({ title, onPress, leftIcon, rightIcon, borderTop }: Props) => {
    const { colors, isDarkMode } = useTheme()

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={isDarkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'}
            style={{
                borderBottomWidth: 1,
                borderTopWidth: borderTop ? 1 : 0,
                borderColor: colors.border,
            }}
        >
            <View style={styles.container}>
                <View style={styles.nameWrapper}>
                    <View style={styles.iconWrapper}>{leftIcon}</View>
                    <Title style={styles.headerTitle} label={title} noMargin={true} />
                </View>

                {rightIcon ?? <Ionicons name="chevron-forward" size={24} color={colors.text} />}
            </View>
        </TouchableHighlight>
    )
}

//styles for dropdown menu
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        minHeight: 60,
    },

    nameWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 15,
    },

    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ListButton
