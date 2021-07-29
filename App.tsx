/**
 * This component is the top dog. This is the component that renders when running the code.
 * @category BIG
 * @module App
 */
import React, { useEffect, useState, useRef } from 'react'
import 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading'
import { Provider } from '@nationskollen/sdk'
import { PushTokenProvider } from './components/PushTokenContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LanguageContextProvider } from './translate/LanguageContext'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import { DarkTheme, LightTheme, ThemeProvider, Theme } from './components/ThemeContext'
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import Footer from './components/Footer/Footer'
import { Platform } from 'react-native'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
})

const App = () => {
    const [initialTheme, setInitialTheme] = useState<Theme | null>(null)
    const [initialLanguageKey, setInitialLanguageKey] = useState<number>(1)
    const [isReady, setIsReady] = useState(false)
    const [expoPushToken, setExpoPushToken] = useState('')
    const [notification, setNotification] = useState<any>(false)

    const responseListener = useRef<any>()
    const notificationListener = useRef<any>()

    const [loaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    })

    if (!loaded) {
        return null
    }

    /** Global font to be used across the app. */
    const customTextProps = {
        style: {
            fontFamily: 'Roboto_400Regular',
        },
    }

    /** Sets all text and inputboxes-fonts to the font
     *  set in customTextProps.*/
    setCustomText(customTextProps)
    setCustomTextInput(customTextProps)

    /** Preloads the fonts before app rendering. */
    function cacheFonts(fonts: { [x: string]: any }) {
        return fonts.map((font: string) => Font.loadAsync(font))
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) => setExpoPushToken(token))

        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification) => {
                setNotification(notification)
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
    })

    if (!isReady) {
        return (
            <AppLoading
                startAsync={async () => {
                    const theme = await AsyncStorage.getItem('savedTheme')
                    const language = await AsyncStorage.getItem('savedLanguage')

                    if (!theme) {
                        setInitialTheme(LightTheme)
                    }

                    const isDark = JSON.parse(theme)

                    setInitialTheme(isDark ? DarkTheme : LightTheme)

                    if (language) {
                        setInitialLanguageKey(parseInt(language))
                    }

                    // Preload Icons

                    const fontAssets = cacheFonts([
                        Ionicons.font,
                        MaterialCommunityIcons.font,
                        MaterialIcons.font,
                    ])
                    await Promise.all([...fontAssets])

                    registerForPushNotificationsAsync()
                }}
                onFinish={() => setIsReady(true)}
                autoHideSplash={true}
                onError={console.warn}
            />
        )
    }

    return (
        <Provider
            config={{
                development: true,
                useWebSockets: true,
                customHostName: 'nationskollen-staging.engstrand.nu',
                useHTTPS: true,
            }}
        >
            <ThemeProvider initialTheme={initialTheme}>
                <LanguageContextProvider initialLanguage={initialLanguageKey}>
                    <PushTokenProvider token={expoPushToken} notification={notification}>
                        <Footer />
                    </PushTokenProvider>
                </LanguageContextProvider>
            </ThemeProvider>
        </Provider>
    )
}

async function registerForPushNotificationsAsync() {
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
    return token
}

export default App
