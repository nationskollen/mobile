/**
 * Renders the cover image, title and icon of a nation.
 * Uses the accent color to provide a personalized view.
 *
 * @category Nation
 * @module NationHeader
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Nation } from '@nationskollen/sdk'
import { useTheme } from '../../ThemeContext'

import NationLogo from './NationLogo'

export interface Props {
    nation: Nation
}

const NationHeader = ({ nation }: Props) => {
    const { colors } = useTheme()

    return (
        <View style={styles.nameWrapper}>
            <View
                style={{
                    width: '100%',
                    height: 87,
                    backgroundColor: colors.background,
                    position: 'absolute',
                    bottom: 0,
                }}
            />
            <View
                style={[
                    styles.logoContainer,
                    {
                        backgroundColor: colors.background,
                    },
                ]}
            >
                <NationLogo src={nation.icon_img_src} size={60} />
            </View>
            <Text style={[styles.nationName, { color: colors.textHighlight }]}>{nation.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        padding: 8,
        borderRadius: 15,
    },

    nameWrapper: {
        width: '100%',
        paddingBottom: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

    nationName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
    },
})

export default NationHeader
