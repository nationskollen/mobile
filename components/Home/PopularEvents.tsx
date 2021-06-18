/**
 * Renders carousel with currently popular events for the homepage
 * @category Home
 * @module PopularEvents
 */
import React, { useState } from 'react'

import { View, Image, StyleSheet, Text, Dimensions } from 'react-native'
import { useTheme } from '../ThemeContext'
import { RouteProp } from '@react-navigation/native'
import { Category, Nation, useEvents, useLocation, useNation, Event } from '@nationskollen/sdk'
import Carousel from 'react-native-snap-carousel'

import Card from '../Common/Card'
import CoverImage from '../Common/CoverImage'
import { useNavigation } from '@react-navigation/native'

interface Props {
    category?: Category
}

interface ItemProps {
    item: Event
}

//TODO: add popular events hook on SDK and support on Server
const PopularEvents = ({ category }: Props) => {
    const { data: events } = useEvents(400) //usePopularEvents(category?)
    
    if (!events) return null
    
    return (
        <Carousel
        data={events}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('screen').width}
        sliderHeight={200}
        itemWidth={300}
        loop={true}
        autoplay={true}
        autoplayDelay={1500}//not sure how to make the transistion slower
        autoplayInterval={4000}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        />
        )
}
    
//maybe extract to its own generic component
const renderItem = ({ item:event }: ItemProps) => {
    //const navigation = useNavigation()
    // const { data: nation } = useNation(event.nation_id)
    // const { data: location } = useLocation(event.location_id)

    return (
        <View style={styles.card}>
            <Card 
                style={{ height: 200, width: 300, overflow:'hidden', zIndex:30}}
                // onPress={() =>
                //     nation && navigation.navigate('Event', { event, nation, eventAddress: location?.address })}
            >
                <CoverImage src={event.cover_img_src} textOverlayColor="black"></CoverImage>
                <Text style={styles.nation}>{"Norrlands Nation"}</Text>
                <Text style={styles.title}>{event.name}</Text>
            </Card>

            {/* TODO: Render <DateBadge></DateBadge> in top right corner*/}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        position:'absolute',
        color:'white',
        bottom:12,
        left:20
    },

    nation: {
        fontSize: 16,
        position:'absolute',
        color:'white',
        bottom:38,
        left:20
    },

    card: {},
})

export default PopularEvents
