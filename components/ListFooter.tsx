import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTheme } from './ThemeContext'

interface Props {
    hasMore: boolean
}

const ListFooter: React.FC<Props> = ({ hasMore }) => {
    const { colors } = useTheme()

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
