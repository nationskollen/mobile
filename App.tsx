import React from 'react'
import 'react-native-gesture-handler'
import Constants from 'expo-constants'
import { Provider } from '@dsp-krabby/sdk'
import { ThemeProvider } from './components/ThemeContext'

import Footer from './components/Footer'

/// Creates a navigation container in which every screen is "positioned"
const App: React.FC = () => {
    return (
        //@ts-ignore
        <Provider config={{
            development: Constants.manifest.extra.development,
            useWebSockets: true,
            customHostName: 'nationskollen-staging.engstrand.nu',
            useHTTPS: true,
        }}>
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        </Provider>
    )
}

export default App
