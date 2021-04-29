/**
 * This component renders information about a nation
 * @category Nation
 *
 * @module NationHeader
 */
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { Nation } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'

import NationLogo from './NationLogo'

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
            <View
                style={[
                    styles.coverContainer,
                    { backgroundColor: !nation.cover_img_src && nation.accent_color },
                ]}
            >
                {nation.cover_img_src && (
                    <React.Fragment>
                        <View
                            style={[
                                styles.coverImageContainer,
                                {
                                    backgroundColor: nation.accent_color,
                                    opacity: nation.cover_img_src ? 0.7 : 1,
                                },
                            ]}
                        />
                        <Image source={{ uri: nation.cover_img_src }} style={styles.coverImage} />
                    </React.Fragment>
                )}
            </View>
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
    },

    coverContainer: {
        height: 225,
        overflow: 'hidden',
    },

    coverImageContainer: {
        height: '100%',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
        right: 0,
    },

    coverImage: {
        flex: 1,
        zIndex: 1,
        resizeMode: 'cover',
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
