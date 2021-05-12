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
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import { useFonts } from '@expo-google-fonts/noto-sans'
import Footer from './components/Footer/Footer'

const App = () => {
    const [initialTheme, setInitialTheme] = useState<Theme | null>(null)
    const [initialLanguageKey, setInitialLanguageKey] = useState<number | null>(null)
    const [isReady, setIsReady] = useState(false)
    const [loaded] = useFonts({
        NotoSans: require('./assets/fonts/NotoSans-Regular.ttf'),
    })

    // We have to to wait for the app to load the custom font before we render it
    if (!loaded) {
        return null
    }

    const customTextProps = {
        style: {
            fontFamily: 'NotoSans',
        },
    }

    setCustomText(customTextProps)
    setCustomTextInput(customTextProps)
    if (!isReady) {
        return (
            <AppLoading
                startAsync={async () => {
                    const theme = await AsyncStorage.getItem('savedTheme')
                    const language = await AsyncStorage.getItem('selectedLanguage')

                    if (!theme) {
                        setInitialTheme(LightTheme)
                    }

                    const isDark = JSON.parse(theme)

                    setInitialTheme(isDark ? DarkTheme : LightTheme)

                    if (!language) {
                        setInitialLanguageKey(1)
                    } else {
                        setInitialLanguageKey(parseInt(language))
                    }
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
                <LanguageContextProvider initialLanguage={initialLanguageKey}>
                    <Footer />
                </LanguageContextProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default App
