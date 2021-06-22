/**
 * Renders layover with search results
 * @category Home
 * @module SearchEvents
 */
import React, { useState } from 'react'

import { View, Image, StyleSheet, Text, Dimensions } from 'react-native'
import { useTheme } from '../ThemeContext'
import {} from '@nationskollen/sdk'
import Overlay from 'react-native-modal-overlay'
import { BlurView } from '@react-native-community/blur'

export interface Props {
    query: string | null
    setQuery: React.Dispatch<React.SetStateAction<string>>
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchEvents = ({ query, setQuery, visible, setVisible }: Props) => {
    const { colors, isDarkMode } = useTheme()

    const onClose = () => {
        setQuery(null)
        setVisible(!visible)
    }

    return (
        <View>
            <Overlay
                visible={visible || query != null}
                onClose={onClose}
                closeOnTouchOutside
                animationType="zoomIn"
                containerStyle={[styles.overlay /*,{backgroundColor: isDarkMode ? }*/]}
                childrenWrapperStyle={styles.contentContainer}
            >
                <View style={{ width: 300, height: 200 }}>
                    <Text style={{ alignSelf: 'center' }}>Hello</Text>
                </View>
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 200,
        width: 200,
        backgroundColor: 'transparent',
        alignSelf: 'center',
    },

    contentContainer: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        opacity: 0.3,
    },
})

export default SearchEvents
