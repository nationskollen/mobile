/**
 * @category Misc
 * @module ListButton
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'

export interface Props {
    title: String
    /** The name/title of the header */
    onPress: () => void
    /** The function to be excecuted when pressing the header */
    leftIcon: Element
    /** */
    rightIcon?: Element
    /** */
}

/**
 * This component renders a clickable header with an icon to the left and an optional icon to the right in the header
 */
const ListButton = ({ title, onPress, leftIcon, rightIcon }: Props) => {
    const { colors } = useTheme()

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.backgroundExtra}
            style={{ borderBottomWidth: 1, borderColor: colors.border }}
        >
            <View style={styles.container}>
                <View style={styles.nameWrapper}>
                    <View style={styles.iconWrapper}>{leftIcon}</View>
                    <Text style={[styles.headerTitle, { color: colors.textHighlight }]}>
                        {title}
                    </Text>
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
