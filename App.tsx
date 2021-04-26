/**
 * This component is the top dog. This is the component that renders when running the code.
 * @category BIG
 * @module App
 */

import React from 'react'
import 'react-native-gesture-handler'
import Constants from 'expo-constants'
import { Provider } from '@dsp-krabby/sdk'
import { ThemeProvider } from './components/ThemeContext'
import { LanguageContextProvider } from './translate/LanguageContext';

import Footer from './components/Footer'

const App = () => {
    return (
        <Provider
            config={{
                development: Constants.manifest.extra.development,
                useWebSockets: true,
                customHostName: 'nationskollen-staging.engstrand.nu',
                useHTTPS: true,
            }}
        >
            <ThemeProvider>
                <LanguageContextProvider>
                    <Footer />
                </LanguageContextProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default App
