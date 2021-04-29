/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterList
 */
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import ListButton from '../ListButton'
import NationLogo from '../Nations/NationLogo'
import { Nation, useNations } from '@dsp-krabby/sdk'

interface Props {
    filterTab: string
}

//used until hook for categories is available
const categories = [
    'Frukost',
    'Brunch',
    'Lunch',
    'Fika',
    'Sport',
    'Restaurang',
    'Bun',
    'Kultur',
    'Gasque',
    'Släpp',
    'Klubb',
    'Konsert',
    'Övrigt',
]

//TODO: add category and student filtering
const FilterList = ({ filterTab }: Props) => {
    const { data } = useNations()

    return (
        <View style={styles.container}>
            {data && (
                <FlatList
                    data={data}
                    renderItem={({ item: nation }) => (
                        <ListButton
                            title={nation.name}
                            onPress={() => console.log('item in filter was pressed')}
                            leftIcon={<NationLogo src={nation.icon_img_src} />}
                        />
                    )}
                    keyExtractor={(item) => item.oid.toString()}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        height: '100%',
    },
})

export default FilterList
