import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'

interface Props {
    src: string | null
    size?: number
    spacing?: number
}

const LogoCircle: React.FC<Props> = ({ src, size, spacing }) => {
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
                    borderRadius: actualSize,
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
                            borderRadius: actualImageSize,
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
        marginRight: 10,
    },

    image: {
        resizeMode: 'contain',
    },
})

export default LogoCircle
