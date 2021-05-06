/**
 * Renders a popup date picker
 * @category Home
 * @module Calendar
 */
import React, { useRef } from 'react'
import 'react-native-gesture-handler'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { useTranslation } from '../../translate/LanguageContext'
import { useTheme } from '../ThemeContext'
import { useDatePicker } from './DatePickerContext'

const Calendar = () => {
    const { date, setDate, shownDate, setShownDate, visible, setVisible } = useDatePicker()
    const { colors, isDarkMode } = useTheme()
    const minimumDate = useRef(new Date('2021-01-01')).current
    const maximumDate = useRef(new Date('2100-01-01')).current
    const { currentLanguage, translate } = useTranslation()

    const handleConfirm = (date: Date) => {
        setShownDate(date)
        setVisible(!visible)
    }

    return (
        <DateTimePickerModal
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            isVisible={visible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={() => setVisible(!visible)}
            date={date}
            isDarkModeEnabled={isDarkMode}
            locale={currentLanguage}
            headerTextIOS={translate.calendar.chooseDate}
            cancelTextIOS={translate.calendar.cancel}
            confirmTextIOS={translate.calendar.confirm}
            textColor={colors.text}
        />
    )
}

export default Calendar
