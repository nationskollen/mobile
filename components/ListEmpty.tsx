/**
 * @category Misc
 * @module ListEmpty
 */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTheme } from './ThemeContext'

// TODO: Add ApiError type from SDK
interface Props {
    error: Error
    loading: boolean
    message: string
}

const ListEmpty: React.FC<Props> = ({ error, loading, message }) => {
    const { colors } = useTheme()

    // Skip rendering if we are loading
    if (loading) {
        return null
    }

    return (
        <Text style={[styles.default, { color: error ? colors.errorText : colors.text }]}>
            {error ? error.message : message}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        paddingVertical: 15,
        marginLeft: 15,
    },
})

export default ListEmpty
