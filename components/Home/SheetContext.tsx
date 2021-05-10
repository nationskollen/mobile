/**
 * @category Home
 * @module SheetContext
 */
import React, { createContext, useState, useContext, useRef } from 'react'

export interface SheetContextContract {
    show: Boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    sheetRef: React.MutableRefObject<any>
}

export const SheetContext = createContext({} as SheetContextContract)
export const useSheet = () => useContext(SheetContext)

export const SheetProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    // used to set snap point of sheet
    const sheetRef = useRef(null)

    return (
        <SheetContext.Provider
            value={{
                show,
                setShow,
                sheetRef,
            }}
        >
            {children}
        </SheetContext.Provider>
    )
}
