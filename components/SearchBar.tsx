import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'

import HeaderButton from './HeaderButton'

export interface Props {
    onSearch: (query: string) => void
    placeholder?: string
    autoFocus?: boolean
}

const SearchBar = ({ onSearch, placeholder, autoFocus }: Props) => {
    const { colors } = useTheme()
    const [query, setQuery] = useState<string | null>(null)
    const [focused, setFocused] = useState(false)
    const iconColor = query === null && !focused ? colors.borderDark : (focused ? colors.textHighlight : colors.text)

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: colors.backgroundExtra,
                borderColor: focused ? colors.borderDark : colors.backgroundExtra
            },
        ]}>
            <Ionicons
                name="search-outline"
                size={20}
                color={iconColor}
            />
            <TextInput
                autoFocus={autoFocus}
                value={query}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChangeText={(query) => setQuery(query === '' ? null : query)}
                onSubmitEditing={() => onSearch(query)}
                style={[styles.input, { color: colors.textHighlight }]}
                placeholderTextColor={colors.borderDark}
            />
            {query !== null && <HeaderButton
                icon="close-outline"
                color={iconColor}
                onPress={() => {
                    setQuery(null)
                    onSearch(null)
                }}
                style={styles.clear}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingLeft: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        fontSize: 16,
        paddingLeft: 10,
        height: '100%',
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },

    clear: {
        height: 35,
        width: 35,
        borderRadius: 10,
    },
})

export default SearchBar
