/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterButtons
 */
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import FilterList from './FilterList'
import Button from '../Button'
import { useNations } from '@dsp-krabby/sdk'

//used until hook for categories is available
const categoriesTmp = [
    {
        name: 'Frukost',
    },
    {
        name: 'Brunch',
    },
    {
        name: 'Lunch',
    },
    {
        name: 'Fika',
    },
    {
        name: 'Sport',
    },
    {
        name: 'Restaurang',
    },
    {
        name: 'Pub',
    },
    {
        name: 'Kultur',
    },
    {
        name: 'Gasque',
    },
    {
        name: 'Släpp',
    },
    {
        name: 'Klubb',
    },
    {
        name: 'Konsert',
    },
    {
        name: 'Övrigt',
    },
]

const student = [{ name: 'Nationskort krävs' }, { name: 'Medlemskap krävs' }]

/**
 * This component is used to create pressable filter category buttons
 */
const FilterButtons = () => {
    const [filterTab, setFilterTab] = useState('')
    const { data: nations } = useNations()
    const categories = categoriesTmp // replace with useCategories() when avaliable

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button
                    onPress={() => setFilterTab('nations')}
                    type={'primary'}
                    label={'Nation'}
                    style={{ width: '30%', height: 70 }}
                />
                <Button
                    onPress={() => setFilterTab('categories')}
                    type={'primary'}
                    label={'Kategori'}
                    style={{ width: '30%', height: 70 }}
                />
                <Button
                    onPress={() => setFilterTab('student')}
                    type={'primary'}
                    label={'Student'}
                    style={{ width: '30%', height: 70 }}
                />
            </View>

            {filterTab != '' && (
                <FilterList
                    filterTab={filterTab}
                    nations={nations}
                    categories={categories}
                    student={student}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 400, //TODO: make dynamic (%-based is too small, not sure why atm)
        justifyContent: 'space-between',
        marginTop: '5%',
        elevation: 100,
        zIndex: 4,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default FilterButtons
