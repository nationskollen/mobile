import React from 'react'
import 'react-native-gesture-handler'
import Constants from 'expo-constants'
import { Provider } from '@dsp-krabby/sdk'
import { ThemeProvider } from './components/ThemeContext'
import { useTranslation } from './translate/LanguageContext';
import Footer from './components/Footer'
import { LanguageContextProvider } from './translate/LanguageContext';

/// Creates a navigation container in which every screen is "positioned"
const App: React.FC = () => {

    return (
        //@ts-ignore
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
