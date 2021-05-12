/**
 * This component is the top dog. This is the component that renders when running the code.
 * @category BIG
 * @module App
 */

import React, { useState } from 'react'
import 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading'
import { Provider } from '@nationskollen/sdk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LanguageContextProvider } from './translate/LanguageContext'
import { DarkTheme, LightTheme, ThemeProvider, Theme } from './components/ThemeContext'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'

import Footer from './components/Footer/Footer'

const App = () => {
    const [initialTheme, setInitialTheme] = useState<Theme | null>(null)
    const [isReady, setIsReady] = useState(false)
    const [loaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    })

    // We have to to wait for the app to load the custom font before we render it
    if (!loaded) {
        return null
    }

    const customTextProps = {
        style: {
            fontFamily: 'Roboto_400Regular',
        },
    }

    setCustomText(customTextProps)
    setCustomTextInput(customTextProps)

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
                development: true,
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
