/**
 * Renders the cover image of a nation or event.
 * Allows for a fallback icon/component if no image is available.
 * You can also specify an overlay color that will be rendered on top
 * of the image to provide a personalized image.
 *
 * @category Common
 * @module Card
 */
import React from 'react'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Image, StyleSheet } from 'react-native'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    src: string
    height?: number
    width?: number
    fallback?: Element
    fallbackIcon?: IconName
    fallbackIconSize?: number
    hideFallbackIcon?: boolean
    overlayColor?: string
    textOverlayColor?: string
    backgroundColor?: string
    children?: Element | Element[]
}

const CoverImage = ({
    src,
    fallback,
    fallbackIcon,
    fallbackIconSize,
    hideFallbackIcon,
    children,
    height,
    width,
    backgroundColor,
    overlayColor,
    textOverlayColor,
}: Props) => {
    const { colors } = useTheme()

    return (
        <View
            style={[
                styles.container,
                {
                    height: height ?? 200,
                    width: width ?? '100%',
                    backgroundColor: backgroundColor ?? colors.backgroundHighlight,
                },
            ]}
        >
            {src ? (
                <>
                    {overlayColor && (
                        <View style={[styles.overlay, { backgroundColor: overlayColor }]} />
                    )}
                    {textOverlayColor && (
                        <LinearGradient
                            colors={['transparent', textOverlayColor]}
                            style={styles.textOverlay}
                        />
                    )}
                    <Image source={{ uri: src }} style={styles.img} />
                </>
            ) : (
                !hideFallbackIcon &&
                (fallback ?? (
                    <Ionicons
                        name={fallbackIcon ?? 'calendar'}
                        size={fallbackIconSize ?? 100}
                        color={colors.borderDark}
                    />
                ))
            )}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 2,
    },

    overlay: {
        opacity: 0.5,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 3,
    },

    textOverlay: {
        position: 'absolute',
        bottom: '-70%',
        left: 0,
        height: '150%',
        width: '100%',
        zIndex: 3,
    },
})

export default CoverImage
