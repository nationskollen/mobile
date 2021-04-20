import React, { createContext, useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

export interface ThemeContextContract {
    isDarkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    colors: ThemeColors
}

export interface ThemeColors {
    primary: string
    background: string
    backgroundExtra: string
    backgroundHighlight: string
    card: string,
    border: string
    borderDark: string
    text: string
    primaryText: string
    focusedText: string
    unFocusedText: string
    nationExtra: string
    notification: string
}

export interface Theme {
    dark: boolean
    colors: ThemeColors
}

const LightTheme: Theme = {
    dark: false,
    colors: {
        primary: '#71002E',
        background: 'white',
        backgroundExtra: '#f1f1f1',
        backgroundHighlight: '#e2e2e2',
        card: '#fff',
        border: '#f1f1f1',
        borderDark: '#ccc',
        text: '#000000',
        primaryText: '#71002E',
        focusedText: 'white',
        unFocusedText: '#555',
        nationExtra: '#F3F3F3',
        notification: 'white',
    },
}

const DarkTheme: Theme = {
    dark: true,
    colors: {
        primary: '#71002E',
        background: '#0a090c',
        backgroundExtra: '#141319',
        backgroundHighlight: '#262430',
        card: '#0a090c',
        border: '#17161c',
        borderDark: '#3d3b49',
        text: '#d4d4d4',
        primaryText: '#ef005f',
        focusedText: 'white',
        unFocusedText: '#9a95a5',
        nationExtra: '#141319',
        notification: 'white',
    },
}

export const ThemeContext = createContext({} as ThemeContextContract)
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState(LightTheme)

    const updateTheme = (dark: boolean) => {
        setDarkMode(true)
        setTheme(dark ? DarkTheme : LightTheme)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, setDarkMode: updateTheme, colors: theme.colors }}>
            <NavigationContainer theme={theme}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    networkActivityIndicatorVisible={true}
                    backgroundColor={theme.colors.primary}
                    barStyle="light-content"
                />
                {children}
            </NavigationContainer>
        </ThemeContext.Provider>
    )
}
