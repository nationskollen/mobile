import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'

import ChooseDateBar from './ChooseDateBar'
import ChooseNationButton from './ChooseNationButton'

const FilterBar = () => {
    const { colors } = useTheme()

    return (
        <View style={[styles.mainWrapper, { backgroundColor: colors.backgroundExtra }]}>
            <ChooseDateBar />
            <ChooseNationButton />
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: 70,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default FilterBar
