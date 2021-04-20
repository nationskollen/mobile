import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'

import ChooseDateBar from './ChooseDateBar'
import ChooseNationButton from './ChooseNationButton'

const FilterBar: React.FC = () => {
    const { colors } = useTheme();

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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#AEAEAE',
    },
})

export default FilterBar
