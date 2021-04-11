import "react-native-gesture-handler";
import { ThemeProvider } from "./components/ThemeContexts";
import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
} from "react-native-navigation-bar-color";
import React from "react";

import Footer from "./components/Footer";
import { StatusBar, Platform, Text, StyleSheet, View } from "react-native";

/// Creates a navigation container in which every screen is "positioned"
function App() {
    return (
        <ThemeProvider>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#71002e"
                translucent={true}
                networkActivityIndicatorVisible={true}
            />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
