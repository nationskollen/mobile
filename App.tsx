/**
 * This component is the top dog. This is the component that renders when running the code.
 * @category BIG
 * @module App
 */

import React, { useState } from 'react'
import 'react-native-gesture-handler'
import Constants from 'expo-constants'
import AppLoading from 'expo-app-loading'
import { Provider } from '@nationskollen/sdk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LanguageContextProvider } from './translate/LanguageContext'
import { DarkTheme, LightTheme, ThemeProvider, Theme } from './components/ThemeContext'

import Footer from './components/Footer/Footer'

const App = () => {
    const [initialTheme, setInitialTheme] = useState<Theme | null>(null)
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <AppLoading
                startAsync={async () => {
                    const theme = await AsyncStorage.getItem('savedTheme')

                    if (!theme) {
                        setInitialTheme(LightTheme)
                    }

                    const isDark = JSON.parse(theme)

                    setInitialTheme(isDark ? DarkTheme : LightTheme)
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
                development: Constants.manifest.extra.development,
                useWebSockets: true,
                customHostName: 'nationskollen-staging.engstrand.nu',
                useHTTPS: true,
            }}
        >
            <ThemeProvider initialTheme={initialTheme}>
                <LanguageContextProvider>
                    <Footer />
                </LanguageContextProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default App
