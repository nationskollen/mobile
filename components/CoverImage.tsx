import React from 'react'
import { useTheme } from './ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { View, Image, StyleSheet } from 'react-native'
import { IconName } from '@expo/vector-icons/Ionicons'

export interface Props {
    src: string
    height?: number
    fallback?: Element
    fallbackIcon?: IconName
    fallbackIconSize?: number
    children?: Element | Element[]
}

const EventCover = ({ src, fallback, fallbackIcon, fallbackIconSize, children, height }: Props) => {
    const { colors } = useTheme()

    return (
        <View
            style={[
                styles.container,
                { height: height ?? 200, backgroundColor: colors.backgroundHighlight },
            ]}
        >
            {src ? (
                <Image source={{ uri: src }} style={styles.img} />
            ) : (
                fallback ?? (
                    <Ionicons
                        name={fallbackIcon ?? 'calendar'}
                        size={fallbackIconSize ?? 100}
                        color={colors.borderDark}
                    />
                )
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
    },
})

export default EventCover
