import React from 'react'
import 'react-native-gesture-handler'
import Constants from 'expo-constants'
import { Provider } from '@dsp-krabby/sdk'
import { ThemeProvider } from './components/ThemeContexts'

import Footer from './components/Footer'

let config

if (Constants.manifest.extra.development) {
    const address = Constants.manifest.debuggerHost.split(':').shift()

    // Expo can only communicate with the API if we set the IP address explicitly.
    config = {
        development: true,
        useWebSockets: true,
        customBaseURL: `http://${address}:3333/api/v1`,
        customWsBaseURL: `ws://${address}:3333`,
    }
} else {
    config = {
        development: false,
        useWebSockets: true,
    }
}

/// Creates a navigation container in which every screen is "positioned"
function App() {
    return (
        <Provider config={config}>
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        </Provider>
    )
}

export default App
