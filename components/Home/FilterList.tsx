/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterList
 */
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import ListButton from '../ListButton'
import NationLogo from '../Nations/NationLogo'
import { NationCollection } from '@dsp-krabby/sdk'

interface Props {
    filterTab: string
    nations: NationCollection
    categories: Array<ArrayObject>
    student: Array<ArrayObject>
}

interface ArrayObject {
    name: string
    oid?: number
    icon_img_src?: string
}

//TODO: add category and student filtering
const FilterList = ({ filterTab, nations, categories, student }: Props) => {
    var data: NationCollection | Array<ArrayObject> =
        (filterTab == 'nations' && nations) ||
        (filterTab == 'categories' && categories) ||
        (filterTab == 'student' && student)

    return (
        <View style={styles.container}>
            {data && (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <ListButton
                            title={item.name}
                            onPress={() => console.log('item in filter was pressed')}
                            leftIcon={<NationLogo src={item?.icon_img_src} />}
                        />
                    )}
                    keyExtractor={(item) => (item?.oid ? item.oid.toString() : item.name)}
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
    },
})

export default FilterList
