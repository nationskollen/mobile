import React from "react";
import "react-native-gesture-handler";
import Constants from 'expo-constants';
import { Client } from '@dsp-krabby/sdk'
import { Provider } from '@dsp-krabby/sdk/lib/react'
import { ThemeProvider } from "./components/ThemeContexts";

import Footer from "./components/Footer";

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

const client = new Client(config)

/// Creates a navigation container in which every screen is "positioned"
function App() {
    return (
        <Provider client={client}>
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
