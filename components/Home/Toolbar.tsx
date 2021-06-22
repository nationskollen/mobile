/**
 * Renders search bar and option buttons for home page
 * @category Home
 * @module Toolbar
 */
import React, { useState } from 'react'

import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '../ThemeContext'
import {} from '@nationskollen/sdk'

import { useNavigation } from '@react-navigation/native'
import SearchBar from '../Common/SearchBar'
import SearchEvents from './SearchEvents'
import { Ionicons } from '@expo/vector-icons'

export interface Props {}

const Toolbar = () => {
    const { colors } = useTheme()
    const [query, setQuery] = useState<string | null>(null)
    const [visibleSearchEvents, setVisibleSearchEvents] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.searchBarContainer}
                //onPress={() => setVisibleSearchEvents(true)} // Move this into SearchBar
            >
                <SearchBar
                    onSearch={setQuery}
                    placeholder={'Search events'} // add translation
                    autoFocus={true}
                ></SearchBar>
            </TouchableOpacity>

            {/* "More" button, onPress could show popup with settings and profile*/}
            <TouchableOpacity
                style={[styles.ellipsis, { backgroundColor: colors.backgroundExtra }]}
            >
                <Ionicons name="ellipsis-horizontal" size={24} color={colors.unFocusedText} />
            </TouchableOpacity>

            {/* overlay for search results */}
            <SearchEvents
                query={query}
                setQuery={setQuery}
                visible={visibleSearchEvents}
                setVisible={setVisibleSearchEvents}
            ></SearchEvents>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginVertical: 10,
        marginLeft: -10, //temporary centering fix
    },

    searchBarContainer: {
        width: '75%',
    },

    ellipsis: {
        width: 60,
        height: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Toolbar
