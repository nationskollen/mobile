/**
 * @category Home
 * @module ChoosedDateBar
 */
import React, { useRef, useCallback } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import { useTheme } from '../ThemeContext'
import { useDatePicker } from './DatePickerContext'
import { useTranslation } from '../../translate/LanguageContext'

const ChooseDateBar = () => {
    const { translate } = useTranslation()
    const { colors, isDarkMode } = useTheme()
    const { shownDate, setShownDate, visible, setVisible } = useDatePicker()
    const currentDate = useRef(new Date().toLocaleDateString()).current
    const dateString = shownDate.toLocaleDateString()

    const changeDate = useCallback((change: number) => {
        setShownDate(new Date(shownDate.setDate(shownDate.getDate() + change)))
    }, [shownDate])

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: isDarkMode ? colors.backgroundHighlight : colors.background,
                    borderColor: colors.borderDark,
                },
            ]}
        >
            <TouchableOpacity onPress={() => changeDate(-1)}>
                <View
                    style={[
                        styles.arrowWrapper,
                        { borderRightWidth: 1, borderColor: colors.borderDark },
                    ]}
                >
                    <Ionicons name="md-chevron-back" size={20} color={colors.text} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dateTextWrapper} onPress={() => setVisible(!visible)}>
                <Text style={[styles.dateText, { color: colors.textHighlight }]}>
                    {currentDate === dateString ? translate.home.todaysEvents : dateString}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => changeDate(1)}>
                <View
                    style={[
                        styles.arrowWrapper,
                        { borderLeftWidth: 1, borderColor: colors.borderDark },
                    ]}
                >
                    <Ionicons name="md-chevron-forward" size={20} color={colors.text} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
    },

    arrowWrapper: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    dateTextWrapper: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default ChooseDateBar
