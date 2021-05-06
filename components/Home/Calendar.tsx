/**
 * @category Home
 * @module Calendar
 */
import React from 'react'
import 'react-native-gesture-handler'
//import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { useTheme } from '../ThemeContext'
import { useDatePicker } from './DatePickerContext'

const Calendar = () => {
    const { date, setDate, shownDate, setShownDate, visible, setVisible } = useDatePicker()
    const { colors, isDarkMode } = useTheme()
    const language = 'sv-SV' // change to dynamic using language hook

    const handleConfirm = (date: Date) => {
        setDate(date)
        setShownDate(date)
        setVisible(!visible)
    }

    return (
        <DateTimePickerModal
            minimumDate={new Date('2021-01-01')}
            isVisible={visible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={() => setVisible(!visible)}
            date={date}
            isDarkModeEnabled={isDarkMode}
            pickerContainerStyleIOS={{ backgroundColor: colors.backgroundExtra }}
            locale={language}
            headerTextIOS={'Välj datum'} //change to dynamic
            cancelTextIOS={'Avbryt'} //change to dynamic
            confirmTextIOS={'Bekräfta'} //change to dynamic
            textColor={colors.text}
        />
    )
}

export default Calendar
