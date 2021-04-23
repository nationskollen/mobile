import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'


interface Props {
    title: String
    onPress: () => void
    leftIcon: Element
    rightIcon?: Element
}

const ListButton: React.FC<Props> = ({ title, onPress, leftIcon, rightIcon }) => {
    const { colors } = useTheme()

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.backgroundExtra}
            style={{ borderBottomWidth: 1, borderColor: colors.border }}
        >
            <View style={styles.header}>
                <View style={styles.nameWrapper}>
                    <View style={styles.iconWrapper}>{leftIcon}</View>
                    <Text style={[styles.headerTitle, { color: colors.text }]}>{title}</Text>
                </View>

                {rightIcon ?? <Ionicons name='chevron-forward' size={24} color={colors.text} />}
            </View>
        </TouchableHighlight>
    )
}

//styles for dropdown menu
const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,

        paddingHorizontal: 15,
    },

    nameWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },

    iconWrapper: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ListButton
