/**
 * @category Home
 * @module CategoryCarousel
 */

import React from 'react'
import { View, Image, StyleSheet, ScrollView, FlatList, Text } from 'react-native'
import { useTheme } from '../ThemeContext'
import { useCategories, Category } from '@nationskollen/sdk'
import Card from '../Common/Card'
import { CategoryIcon } from './Filtering/FilterListIcons'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from 'react-native-elements'

interface CarouselProps {
    showTitle?: boolean
    title: string
}

interface ItemProps {
    item: Category
}

const CategoryCarousel = ({ showTitle, title }: CarouselProps) => {
    const { data: categories } = useCategories()
    const { colors, isDarkMode } = useTheme()

    const renderItem = ({ item: category }: ItemProps) => {
        return (
            <Card
                style={{
                    height: 75,
                    width: 150,
                    borderRadius: 20,
                    zIndex: 3,
                    elevation: 3,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
                //TODO: onPress={(category)=>{}}
            >
                <View style={styles.icon}>
                    <CategoryIcon category={category.name}></CategoryIcon>
                </View>
                <Text style={[{ color: isDarkMode ? 'black' : 'white' }, styles.text]}>
                    {category.name}
                </Text>
                <LinearGradient colors={['transparent', 'orange']} style={styles.gradient} />
            </Card>
        )
    }
    return (
        <>
            {showTitle && (
                <View>
                    <Text style={styles.carouselTitle}>{title}</Text>
                </View>
            )}

            <FlatList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                style={{ marginLeft: 10 }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    carouselTitle: {
        paddingTop: 20,
        paddingBottom: 5,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },

    icon: {},

    text: { fontSize: 16, paddingLeft: 10, zIndex: 5 },

    gradient: {
        height: 150,
        width: '100%',
        position: 'absolute',
        bottom: -25,
        left: 0,
        zIndex: 1,
    },
})

export default CategoryCarousel
