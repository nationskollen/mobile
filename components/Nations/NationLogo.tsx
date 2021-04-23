/**
 * This component styles and render a logo.
 * @category Nation
 * @module NationLogo
 * @param src The source of the logo
 * @param size The size of the logo container
 * @param spacing The spacing from the logo container to the logo
 *
 */
import React from 'react'
import { useTheme } from '../ThemeContext'
import { Image, View, StyleSheet } from 'react-native'

export interface Props {
    src: string | null
    size?: number
    spacing?: number
}

const NationLogo = ({ src, size, spacing }: Props) => {
    const { colors } = useTheme()
    const actualSize = size ?? 50
    const actualImageSize = actualSize - (spacing ?? 6)

    return (
        <View
            style={[
                styles.wrapper,
                {
                    backgroundColor: colors.backgroundHighlight,
                    height: actualSize,
                    width: actualSize,
                },
            ]}
        >
            {src && (
                <Image
                    source={{ uri: src }}
                    style={[
                        styles.image,
                        {
                            height: actualImageSize,
                            width: actualImageSize,
                        },
                    ]}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    image: {
        resizeMode: 'contain',
        borderRadius: 10,
    },
})

export default NationLogo
