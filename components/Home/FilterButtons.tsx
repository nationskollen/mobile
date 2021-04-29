/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterButtons
 */
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import FilterList from './FilterList'
import PrimaryButton from '../PrimaryButton'

/**
 * @return component with pressable buttons
 */
const FilterButtons = () => {
    const [filterTab, setFilterTab] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <PrimaryButton
                    onPress={() => setFilterTab('nation')}
                    label={'Nation'}
                    //icon={}
                    style={{ width: '30%', height: 70 }}
                />
                <PrimaryButton
                    onPress={() => setFilterTab('category')}
                    label={'Kategori'}
                    //icon={}
                    style={{ width: '30%', height: 70 }}
                />
                <PrimaryButton
                    onPress={() => setFilterTab('student')}
                    label={'Student'} // better idea for this long word?
                    //icon={}
                    style={{ width: '30%', height: 70 }}
                />
            </View>

            {filterTab != '' && <FilterList filterTab={filterTab} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 400, //TODO: make dynamic (%-based is too small, not sure why atm)
        justifyContent: 'space-between',
        marginTop: '5%',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default FilterButtons
