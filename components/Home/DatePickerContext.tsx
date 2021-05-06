/**
 * @category Home
 * @module DatePickerContext
 */
import React, { createContext, useState, useContext, useRef, useCallback } from 'react'
import useConstant from 'use-constant'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

export interface DatePickerContextContract {
    date: Date
    shownDate: Date,
    currentDate: Date
    visible: boolean
    setDate: React.Dispatch<React.SetStateAction<Date>>
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    setShownDate: React.Dispatch<React.SetStateAction<Date>>
}

export const DatePickerContext = createContext({} as DatePickerContextContract)
export const useDatePicker = () => useContext(DatePickerContext)

export const DatePickerProvider = ({ children }) => {
    // Initalize to today's date
    const currentDate = useRef(new Date()).current
    const [date, setDate] = useState(currentDate)
    const [shownDate, setShownDate] = useState(currentDate)
    const [visible, setVisible] = useState(false)

    const updateDate = useConstant(() => AwesomeDebouncePromise(setDate, 1000))
    const updateShownDate = useCallback((newDate: Date) => {
        setShownDate(newDate)
        updateDate(newDate)
    }, [])

    return (
        <DatePickerContext.Provider
            value={{
                date,
                shownDate,
                setDate: updateDate,
                setShownDate: updateShownDate,
                visible,
                setVisible,
                currentDate,
            }}
        >
            {children}
        </DatePickerContext.Provider>
    )
}
