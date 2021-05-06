import React, { useState, useCallback } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import useConstant from 'use-constant'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

import HeaderButton from '../Header/HeaderButton'

export const DEFAULT_DEBOUNCE_DELAY = 250

export interface Props {
    onSearch: (query: string) => void
    placeholder?: string
    autoFocus?: boolean
    delay?: number
}

const SearchBar = ({ onSearch, placeholder, autoFocus, delay }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const [query, setQuery] = useState<string | null>(null)
    const [focused, setFocused] = useState(false)
    const iconColor =
        query === null && !focused
            ? colors.borderDark
            : focused
            ? colors.textHighlight
            : colors.text

    const handleChange = useCallback((query) => {
        setQuery(query)
        callback(query)
    }, [])

    // Create the debounced callback
    const callback = useConstant(() =>
        AwesomeDebouncePromise(onSearch, delay ?? DEFAULT_DEBOUNCE_DELAY)
    )

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.backgroundExtra,
                    borderColor: focused ? colors.borderDark : colors.backgroundExtra,
                },
            ]}
        >
            <Ionicons name="search-outline" size={20} color={iconColor} />
            <TextInput
                autoFocus={autoFocus}
                value={query}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChangeText={(query) => handleChange(query === '' ? null : query)}
                style={[styles.input, { color: colors.textHighlight }]}
                placeholderTextColor={colors.borderDark}
                keyboardAppearance={isDarkMode ? 'dark' : 'light'}
            />
            {query !== null && (
                <HeaderButton
                    icon="close-outline"
                    color={iconColor}
                    onPress={() => {
                        setQuery(null)
                        onSearch(null)
                    }}
                    style={styles.clear}
                />
            )}
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
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    clear: {
        height: 35,
        width: 35,
        borderRadius: 10,
    },
})

export default SearchBar
