import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import {
    StatusBar,
} from "react-native";

import Footer from "./components/Footer";

/// Creates a navigation container in which every screen is "positioned"
function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
            />
            <Footer />
        </NavigationContainer>
    );
}

export default App;
