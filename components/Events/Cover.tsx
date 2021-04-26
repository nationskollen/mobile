import React from 'react'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { View, Image, StyleSheet } from 'react-native'

export interface Props {
    src: string
    height: number
}

const EventCover = ({ src, height }: Props) => {
    const { colors } = useTheme()

    return (
        <View style={[styles.container, { height, backgroundColor: colors.backgroundHighlight }]}>
            {src ? (
                <Image source={{ uri: src }} style={styles.img} />
            ) : (
                <Ionicons name="calendar" size={100} color={colors.borderDark} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
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
