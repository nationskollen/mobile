/**
 * This component is the top dog. This is the component that renders when running the code.
 * @category BIG
 * @module App
 */
import React, { useEffect, useState } from 'react'
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
import * as Font from 'expo-font';

import Footer from './components/Footer/Footer'


const App = () => {
    const [initialTheme, setInitialTheme] = useState<Theme | null>(null)
    const [initialLanguageKey, setInitialLanguageKey] = useState<number>(1)
    const [isReady, setIsReady] = useState(false)

    const [loaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    })

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

	function cacheFonts(fonts: { [x:string]:any}) {
        return fonts.map((font:string) => Font.loadAsync(font))
    }


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

		            const fontAssets = cacheFonts([Ionicons.font, MaterialCommunityIcons.font, MaterialIcons.font ])
                    await Promise.all([...fontAssets])
			 


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
                    <PushTokenProvider>
                        <Footer />
                    </PushTokenProvider>
                </LanguageContextProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default App
