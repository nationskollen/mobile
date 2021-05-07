/**
 * @category Home
 * @module SheetContext
 */
import React, { createContext, useState, useContext, useRef, useCallback } from 'react'

export interface SheetContextContract {
    sheetRef: React.MutableRefObject<any>
}

export const SheetContext = createContext({} as SheetContextContract)
export const useSheet = () => useContext(SheetContext)

export const SheetProvider = ({ children }) => {
    // used to set snap point of sheet
    const sheetRef = React.useRef(null)

    return (
        <SheetContext.Provider
            value={{
                sheetRef,
            }}
        >
            {children}
        </SheetContext.Provider>
    )
}
