import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import {
    StatusBar,
} from "react-native";

import Footer from "./components/Footer";

const MyTheme = {
  dark: false,
  colors: {
    primary: '#71002E',
    background: "white",
    card: '#71002E',
    text: "white",
    border: '#666666',
    notification: "white",
  },
};

/// Creates a navigation container in which every screen is "positioned"
function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <StatusBar
                backgroundColor="red"
                barStyle="dark-content"
            />
            <Footer/>
        </NavigationContainer>
    );
}

export default App;
