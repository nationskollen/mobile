/**
 * Loads and provides the expo push token.
 *
 * @category Misc
 * @module PushTokenContext
 */
import React, { createContext, useCallback, useState, useContext, useRef, useEffect } from 'react'
import Constants from 'expo-constants'
import { Platform } from 'react-native'
import { useAsync } from 'react-async-hook'
import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface PushTokenContextContract {
    token: string
    lastUpdated?: Date
    setLastUpdated: (date: Date) => void
}

export interface Props {
    children: Element | Element[]
}

export const PushTokenContext = createContext({} as PushTokenContextContract)
export const usePushToken = () => useContext(PushTokenContext)

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
})

async function registerForPushNotificationsAsync(setLoading) {
    let token: string

    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }

        if (finalStatus !== 'granted') {
            console.log('Failed to get push token for push notification!')
            return
        }

        token = (await Notifications.getExpoPushTokenAsync()).data
        console.log(token)
    } else {
        console.log('Must use physical device for Push Notifications')
    }

    // TODO: Set options to match branding
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }
    setLoading(false);
    return token
}

// TODO: Allow registration of callbacks for new notifications?
export const PushTokenProvider = ({ children }: Props) => {
    const responseListener = useRef<any>()
    const notificationListener = useRef<any>()
    const [token, setToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const { result } = useAsync(async () => await AsyncStorage.getItem('lastUpdated'), [])
    const setLastUpdated = useCallback(
        (date: Date) => AsyncStorage.setItem('lastUpdated', date.toISOString()),
        []
    )

    useEffect(() => {
        registerForPushNotificationsAsync(setLoading).then((token) => setToken(token))

        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log(notification)
            }
        )

        responseListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                console.log(response)
            }
        )

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current)
            Notifications.removeNotificationSubscription(responseListener.current)
        }
    }, [token])

    return (
        <>
            {!loading &&  (
                <PushTokenContext.Provider
                    value={{
                        token,
                        lastUpdated: result ? new Date(result) : undefined,
                        setLastUpdated,
                    }}
                >
                    {children}
                </PushTokenContext.Provider>
            )}
        </>
    )
}
