/**
 * @category Home
 * @module CardSnapCarousel
 */
import React, { useState } from 'react'

import { View, Image, StyleSheet, Text, Dimensions } from 'react-native'
import { useTheme } from '../ThemeContext'
import { RouteProp } from '@react-navigation/native'
import { Nation, useEvents } from '@nationskollen/sdk'
import { TabStackParamList } from '../Footer/Footer'
import { DatePickerProvider } from './DatePickerContext'
import { SheetProvider } from './SheetContext'
import { FilterProvider } from './Filtering/FilterContext'
import Carousel from 'react-native-snap-carousel'

import Title from '../Common/Title'
import Timeline from './Timeline'
import Calendar from './Calendar'
import FilterBar from './FilterBar'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'
import BottomSheet from './Bottomsheet'
import FilterButtons from './Filtering/FilterButtons'
import CardCarousel from '../Common/CardCarousel'
import Card from '../Common/Card'

/**
 * @typeParam T the type of each item in the data prop
 */
export interface Props<T> {
    HEIGHT: number
    width: number
    data: Array<T>
    isValidating: boolean
    title?: string
    srcExtractor?: (item: T) => string
    paddingBottom?: number
    renderContent?: (item: T) => Element
}

//TODO: add popular events hook on SDK and support on Server
const CardSnapCarousel = (HEIGHT, WIDTH, isValidating, data, title) => {
    // Skip rendering if no data is available
    if ((!data || data.length === 0) && !isValidating) {
        return null
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.card}>
                <Card style={{ height: HEIGHT, width: WIDTH, backgroundColor: 'red' }}>
                    <Text style={styles.title}>{item.name}</Text>
                </Card>
            </View>
        )
    }

    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={300}
            loop={true}
            autoplay={true}
            autoplayDelay={800}
            autoplayInterval={4000}
        />
    )
}

// <CardCarousel
//     height={200}
//     data={events}
//     cardWidth={200}
//     srcExtractor={(event) => event.cover_img_src}
//     title={'I fokus'} // TODO: make dynamic, add translation
//     isValidating={false}
//     paddingBottom={20}
//     renderContent={(event) => (
//         <>
//             <Text style={{ color: '#ccc' }}>{'Norrlands Nation'}</Text>
//             <Title label={event.name} style={{ color: 'white' }} noMargin={true} />
//         </>
//     )}
// />

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    card: {},
})

export default CardSnapCarousel
