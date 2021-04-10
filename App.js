import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Platform,
    TextInput,
} from "react-native";

import Footer from "./components/Footer";

/// Creates a navigation container in which every screen is "positioned"
function App() {
    return (
        <NavigationContainer>
            <Footer />
        </NavigationContainer>
    );
}

export default App;
