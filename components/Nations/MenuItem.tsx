import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { MenuItem as MenuItemResponse } from '@dsp-krabby/sdk'

import Card from '../Card'
import Title from '../Title'
import CoverImage from '../CoverImage'
import ContentContainer from '../ContentContainer'

export interface Props {
    item: MenuItemResponse
}

const MenuItem = ({ item }: Props) => {
    const { colors } = useTheme()

    return (
        <Card>
            {item.cover_img_src && <CoverImage src={item.cover_img_src} />}
            <ContentContainer direction="row">
                <View style={styles.itemText}>
                    <Title label={item.name} />
                    <Text style={{ color: colors.text }}>{item.description}</Text>
                </View>
                <Text style={[styles.priceText, { color: colors.errorText }]}>
                    {item.price + ' kr'}
                </Text>
            </ContentContainer>
        </Card>
    )
}

const styles = StyleSheet.create({
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
