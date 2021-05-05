/**
 * @category Misc
 * @module ListFooter
 */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { PaginationMeta } from '@dsp-krabby/sdk'

interface Props {
    pagination: PaginationMeta | null
    isValidating: boolean
    size: number
}

const ListFooter = ({ pagination, isValidating, size }: Props) => {
    if (pagination && pagination.total > 0) {
        return null
    }

    const { colors } = useTheme()
    const hasMore = isValidating || pagination.last_page !== size

    return (
        <Text style={[styles.default, { color: colors.text }]}>
            {hasMore ? 'Laddar fler...' : 'Inga fler'}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontSize: 14,
        paddingVertical: 10,
        paddingBottom: 20,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default ListFooter
