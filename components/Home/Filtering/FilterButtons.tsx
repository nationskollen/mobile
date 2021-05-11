/**
 * This file contains components for filtering the displayed events on the timeline
 * @category Home
 * @module FilterButtons
 */
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Button from '../../Common/Button'
import NationFilter from './FilterLists/NationFilter'
import CategoryFilter from './FilterLists/CategoryFilter'
import StudentFilter from './FilterLists/StudentFilter'
import { useTheme } from '../../ThemeContext'
import { useTranslation } from '../../../translate/LanguageContext'

/**
 * This component is used to create pressable filter category buttons
 */
const FilterButtons = () => {
    const [filterList, setFilterList] = useState(<NationFilter />)
    const { translate } = useTranslation()
    const [focus, setFocus] = useState(1)
    const buttonStyles = buttons()

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button
                    onPress={() => {
                        setFilterList(<NationFilter />)
                        setFocus(1)
                    }}
                    type={'light'}
                    label={'Nation'}
                    style={focus === 1 ? buttonStyles.buttonFocus : buttonStyles.button}
                />
                <Button
                    onPress={() => {
                        setFilterList(<CategoryFilter />)
                        setFocus(2)
                    }}
                    type={'light'}
                    label={translate.filterButtons.category}
                    style={focus === 2 ? buttonStyles.buttonFocus : buttonStyles.button}
                />
                <Button
                    onPress={() => {
                        setFilterList(<StudentFilter />)
                        setFocus(3)
                    }}
                    type={'light'}
                    label={'Student'}
                    style={focus === 3 ? buttonStyles.buttonFocus : buttonStyles.button}
                />
            </View>

            {filterList}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        elevation: 10,
        zIndex: 10,
    },

    buttonsContainer: {
        marginTop: 5,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

const buttons = () => {
    const { colors } = useTheme()

    return StyleSheet.create({
        button: {
            width: '30%',
            height: 60,
            backgroundColor: colors.backgroundExtra,
        },

        buttonFocus: {
            width: '30%',
            height: 60,
            backgroundColor: colors.backgroundHighlight,
            shadowColor: colors.textHighlight,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 3,

            elevation: 6,
        },
    })
}

export default FilterButtons
