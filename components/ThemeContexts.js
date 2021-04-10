import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

const LightTheme = {
  dark: false,
  colors: {
    primary: '#71002E',
    background: "white",
    backgroundExtra: '#f1f1f1',
    card: '#71002E',
    text: '#000000',
    border: '#f1f1f1',
    notification: "white",
    notificationImg : '#E8E8E8',
    notificationRectangle : '#E8E8E8',
    notificationBackground : 'white'
  },
}

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#71002E',
    background: '#1e272e',
    card: '#71002E',
    text: '#d4d4d4',
    border: '#3C4650',
    notification: "white",
    notificationImg : '#303030',
    notificationRectangle : '#424242', 
    notificationBackground: '#1e272e',
  },
}

export const themeContext = createContext(LightTheme);

export const useDarkMode = () => useContext(themeContext);

export const ThemeProvider = ({ children }) => {
    // const colorScheme = useColorScheme();
    const [isDarkMode, setDarkMode] = useState(false);
    const currentTheme = isDarkMode ? DarkTheme : LightTheme;

    return (
        <themeContext.Provider value={{ isDarkMode, setDarkMode}}>
            <NavigationContainer theme={currentTheme}>
                <StatusBar
                    backgroundColor={currentTheme.colors.primary}
                    barStyle='light-content'
                />
                {children}
            </NavigationContainer>
        </themeContext.Provider>
    )
}
