/**
 * Renders carousel with currently popular events for the homepage
 * @category Home
 * @module PopularEvents
 */
import React, { useState } from 'react'

import { View, Image, StyleSheet, Text, Dimensions } from 'react-native'
import { useTheme } from '../ThemeContext'
import { RouteProp } from '@react-navigation/native'
import {
    Category,
    Nation,
    useEvents,
    useLocation,
    useNation,
    Event,
    useNations,
    useLocations,
} from '@nationskollen/sdk'
import Carousel from 'react-native-snap-carousel'

import Card from '../Common/Card'
import CoverImage from '../Common/CoverImage'
import { useNavigation } from '@react-navigation/native'
import DateBadge from './DateBadge'

interface Props {
    category?: Category
}

interface ItemProps {
    item: Event
    index: number
}

//TODO: add sortBy prop on useEvents, to fetch the most popular events
const PopularEvents = ({ category }: Props) => {
    const { data: events } = useEvents(405) //usePopularEvents(category?)

    if (!events) return null

    //maybe extract to its own generic component
    const renderItem = ({ item: event }: ItemProps) => {
        //const navigation = useNavigation()
        //const { data: nations } = useNation(event.nation_id)
        //ERROR: using hooks inside this function does not work due to how the carousel calls the function. May need to be swapped for another carousel

        return (
            <View style={styles.card}>
                <Card
                    style={{
                        height: 200,
                        width: 300,
                        borderRadius: 20,
                        overflow: 'hidden',
                        zIndex: 1,
                        elevation: 1,
                        //TODO: add shadows!
                    }}
                    //ERROR: due to hooks not working
                    // onPress={() =>
                    //     nation &&
                    //     navigation.navigate('Event', {
                    //         event,
                    //         nation,
                    //         location,
                    //     })
                    // }
                >
                    <CoverImage src={event.cover_img_src} textOverlayColor="black"></CoverImage>
                    <Text style={styles.nation}>{'Norrlands Nation'}</Text>
                    <Text style={styles.title}>{event.name}</Text>
                </Card>
                <View style={styles.badge}>
                    <DateBadge />
                </View>
            </View>
        )
    }

    return (
        <Carousel
            data={events}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('screen').width}
            sliderHeight={200}
            itemWidth={300}
            loop={true}
            autoplay={false}
            // autoplayDelay={1500} //not sure how to make the transistion slower
            // autoplayInterval={4000}
            enableMomentum={false}
            lockScrollWhileSnapping={true}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold', //does not display bold, why
        fontSize: 18,
        position: 'absolute',
        color: 'white',
        bottom: 12,
        left: 20,
    },

    nation: {
        fontSize: 16,
        position: 'absolute',
        color: 'white',
        bottom: 38,
        left: 20,
    },

    badge: {
        position: 'absolute',
        top: 15,
        right: 0,
        zIndex: 2,
    },

    card: {},
})

export default PopularEvents
