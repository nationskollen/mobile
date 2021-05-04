/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterButtons
 */
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Button from '../Button'
import { useNations } from '@dsp-krabby/sdk'
import { useFilter } from './FilterContext'
import FilterListNation from './FilterLists/FilterListNation'
import FilterListCategory from './FilterLists/FilterListCategory'
import FilterListStudent from './FilterLists/FilterListStudent'

//used until hook for categories is available
export const categoriesTmp = ['Frukost','Brunch','Lunch','Fika','Sport','Restaurang','Pub','Kultur','Gasque','Släpp','Klubb','Konsert','Övrigt',]

export const student = ['Nationskort krävs','Medlemskap krävs']

/**
 * This component is used to create pressable filter category buttons
 */
const FilterButtons = () => {
    const [filterList, setFilterList] = useState(<View/>)
    const { data: nations } = useNations()

    const categories = categoriesTmp // replace with useCategories() when avaliable


    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button
                    onPress={() => setFilterList(<FilterListNation nations={nations}/>)}
                    type={'primary'}
                    label={'Nation'}
                    style={{ width: '30%', height: 60 }}
                />
                <Button
                    onPress={() => setFilterList(<FilterListCategory categories={categories}/>)}
                    type={'primary'}
                    label={'Kategori'}
                    style={{ width: '30%', height: 60 }}
                />
                <Button
                    onPress={() => setFilterList(<FilterListStudent student={student}/>)}
                    type={'primary'}
                    label={'Student'}
                    style={{ width: '30%', height: 60 }}
                />
            </View>

            {filterList}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
        justifyContent: 'space-between',
        elevation: 4,
        zIndex: 4,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export const filterStyles = StyleSheet.create({
    listContainer: {
        width: '100%',
        //height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
    },
})

export default FilterButtons
