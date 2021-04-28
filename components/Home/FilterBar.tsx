/**
 * @category Home
 * @module FilterBar
 */
import React from 'react'
import { View, StyleSheet } from 'react-native'

import ChooseDateBar from './ChooseDateBar'
import ChooseNationButton from './ChooseNationButton'

export interface Props {
    hideNationFilter?: boolean
}

const FilterBar = ({ hideNationFilter }: Props) => {
    return (
        <View style={styles.mainWrapper}>
            <ChooseDateBar />
            {!hideNationFilter && <ChooseNationButton />}
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: 62,
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default FilterBar
