/**
 * @category Misc
 * @module ListEmpty
 */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTheme } from './ThemeContext'
import { ApiError } from '@dsp-krabby/sdk'

export interface Props {
    error: ApiError | Error
    loading: boolean
    message: string
}

const ListEmpty = ({ error, loading, message }: Props) => {
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
        marginLeft: 15,
        marginTop: 10,
    },
})

export default ListEmpty
