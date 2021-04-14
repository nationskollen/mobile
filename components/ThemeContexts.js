import React, { createContext, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

const LightTheme = {
    dark: false,
    colors: {
        primary: "#71002E",
        background: "white",
        backgroundExtra: "#f1f1f1",
        backgroundHighlight: "#e2e2e2",
        card: "#fff",
        border: "#f1f1f1",
        text: "#000000",
        primaryText: "#71002E",
        focusedText: "white",
        unFocusedText: "#555",
        nationExtra: "#F3F3F3",
    },
};

const DarkTheme = {
    dark: true,
    colors: {
        primary: "#71002E",
        background: "#0a090c",
        backgroundExtra: "#141319",
        backgroundHighlight: "#262430",
        card: "#0a090c",
        border: "#17161c",
        text: "#d4d4d4",
        primaryText: "#ef005f",
        focusedText: "white",
        unFocusedText: "#9a95a5",
        nationExtra: "#141319",
    },
};

export const themeContext = createContext(LightTheme);

export const useDarkMode = () => useContext(themeContext);

export const ThemeProvider = ({ children }) => {
    // const colorScheme = useColorScheme();
    const [isDarkMode, setDarkMode] = useState(false);
    const currentTheme = isDarkMode ? DarkTheme : LightTheme;

    return (
        <themeContext.Provider value={{ isDarkMode, setDarkMode }}>
            <NavigationContainer theme={currentTheme}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    networkActivityIndicatorVisible={true}
                    backgroundColor={currentTheme.colors.primary}
                    barStyle="light-content"
                />
                {children}
            </NavigationContainer>
        </themeContext.Provider>
    );
};
