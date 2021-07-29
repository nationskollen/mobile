/**
 * Loads and provides the expo push token.
 *
 * @category Misc
 * @module PushTokenContext
 */
import React, { createContext, useCallback, useState, useContext, useRef, useEffect } from 'react'
import { useAsync } from 'react-async-hook'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface PushTokenContextContract {
    token: string
    lastUpdated?: Date
    setLastUpdated: (date: Date) => void
    notification: boolean
}

export interface Props {
    children: Element | Element[]
    expoToken: string
    notification: any
}

export const PushTokenContext = createContext({} as PushTokenContextContract)
export const usePushToken = () => useContext(PushTokenContext)

// TODO: Allow registration of callbacks for new notifications?
export const PushTokenProvider = ({ token, notification, children }) => {
    const { result } = useAsync(async () => await AsyncStorage.getItem('lastUpdated'), [])
    const setLastUpdated = useCallback(
        (date: Date) => AsyncStorage.setItem('lastUpdated', date.toISOString()),
        []
    )
    return (
        <>
            {
                <PushTokenContext.Provider
                    value={{
                        token,
                        lastUpdated: result ? new Date(result) : undefined,
                        setLastUpdated,
                        notification,
                    }}
                >
                    {children}
                </PushTokenContext.Provider>
            }
        </>
    )
}
