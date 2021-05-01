/**
 * Renders the cover image, title and icon of a nation.
 * Uses the accent color to provide a personalized view.
 *
 * @category Nation
 * @module NationHeader
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Nation } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'

import NationLogo from './NationLogo'
import CoverImage from '../CoverImage'

export interface Props {
    nation: Nation
}

const NationHeader = ({ nation }: Props) => {
    const { colors } = useTheme()

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.backgroundExtra,
                },
            ]}
        >
            <CoverImage
                src={nation.cover_img_src}
                height={225}
                hideFallbackIcon={true}
                backgroundColor={nation.accent_color}
                overlayColor={nation.accent_color}
            />
            <View style={styles.nameWrapper}>
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
                <Text style={[styles.nationName, { color: colors.textHighlight }]}>
                    {nation.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 75,
        zIndex: 50,
    },

    logoContainer: {
        padding: 8,
        borderRadius: 15,
    },

    nameWrapper: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -65,
        zIndex: 3,
    },

    nationName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
    },
})

export default NationHeader
