import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../ThemeContext'
import { MenuItem as MenuItemResponse } from '@dsp-krabby/sdk'

import Title from '../../Common/Title'
import CoverImage from '../../Common/CoverImage'
import ContentContainer from '../../Common/ContentContainer'

export interface Props {
    item: MenuItemResponse
}

const COVER_IMG_SIZE = 70

const MenuItem = ({ item }: Props) => {
    const { colors } = useTheme()

    return (
        <ContentContainer
            style={{ borderBottomWidth: 1, borderBottomColor: colors.border }}
            direction="row"
        >
            <View style={{ borderRadius: 10, overflow: 'hidden', height: COVER_IMG_SIZE }}>
                <CoverImage
                    src={item.cover_img_src}
                    height={COVER_IMG_SIZE}
                    width={COVER_IMG_SIZE}
                    fallbackIcon="md-fast-food-outline"
                    fallbackIconSize={45}
                />
            </View>
            <View style={styles.container}>
                <Title label={item.name} />
                <Text style={{ color: colors.text }}>{item.description}</Text>
            </View>
            <Text style={[styles.priceText, { color: colors.errorText }]}>
                {item.price + ' kr'}
            </Text>
        </ContentContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        flex: 1,
    },

    itemText: {
        flex: 1,
        marginRight: 15,
    },

    priceText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default MenuItem
