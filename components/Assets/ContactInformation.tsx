import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    title: string
    value: string
    icon: IconName
}

const ContactInformation = ({ title, value, icon }) => {
    const { colors } = useTheme()

    return (
        <View style={[styles.iconContainer, { marginBottom: 5 }]}>
            <Ionicons name={icon} color={colors.text} size={18} style={styles.icon} />
            <View style={styles.contactContainer}>
                <Text style={{ color: colors.text }}>{title}</Text>
                <Text style={{ color: colors.text }}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        marginRight: 5,
    },

    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
})

export default ContactInformation
