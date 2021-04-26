/**
 * @category Home
 * @module DatePickerContext
 */
import React, { createContext, useState, useContext } from 'react'

export interface DatePickerContextContract {
    date: Date
    visible: boolean
    setDate: React.Dispatch<React.SetStateAction<Date>>
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const DatePickerContext = createContext({} as DatePickerContextContract)
export const useDatePicker = () => useContext(DatePickerContext)

export const DatePickerProvider = ({ children }) => {
    // Initalize to today's date
    const [date, setDate] = useState(new Date())
    const [visible, setVisible] = useState(false)

    return (
        <DatePickerContext.Provider value={{ date, setDate, visible, setVisible }}>
            {children}
        </DatePickerContext.Provider>
    )
}
