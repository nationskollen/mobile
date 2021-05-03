/**
 * @category Home
 * @module FilterBar
 */
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import ChooseDateBar from './ChooseDateBar'
import ChooseNationButton from './ChooseNationButton'
import FilterButtons from './FilterButtons'

export interface Props {
    hideNationFilter?: boolean
}

const FilterBar = ({ hideNationFilter }: Props) => {
    const [showFilters, setShowFilters] = useState(false)
    return (
        <>
            <View style={styles.mainWrapper}>
                <View style={{ flexDirection: 'row' }}>
                    <ChooseDateBar />
                    {!hideNationFilter && (
                        <ChooseNationButton show={showFilters} setShow={setShowFilters} />
                    )}
                </View>
            </View>

            {showFilters && <FilterButtons />}
        </>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: 62,
        paddingVertical: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
})

export default FilterBar
