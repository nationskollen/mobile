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
    card: string
    border: string
    borderDark: string
    nationExtra: string
    notification: string
    text: string
    textHighlight: string
    errorText: string
    primaryText: string
    focusedText: string
    unFocusedText: string
}

export interface Theme {
    dark: boolean
    colors: ThemeColors
}

export const LightTheme: Theme = {
    dark: false,
    colors: {
        primary: '#71002E',
        background: 'white',
        backgroundExtra: '#f1f1f1',
        backgroundHighlight: '#e2e2e2',
        card: '#fff',
        border: '#f1f1f1',
        borderDark: '#ccc',
        nationExtra: '#F3F3F3',
        notification: 'white',
        text: '#222',
        textHighlight: '#000',
        errorText: '#e03c3f',
        primaryText: '#71002E',
        focusedText: 'white',
        unFocusedText: '#555',
    },
}

export const DarkTheme: Theme = {
    dark: true,
    colors: {
        primary: '#71002E',
        background: '#0a090c',
        backgroundExtra: '#141319',
        backgroundHighlight: '#262430',
        card: '#0a090c',
        border: '#17161c',
        borderDark: '#3d3b49',
        nationExtra: '#141319',
        notification: 'white',
        text: '#d4d4d4',
        textHighlight: 'white',
        errorText: '#fc5372',
        primaryText: '#ef005f',
        focusedText: 'white',
        unFocusedText: '#9a95a5',
    },
}

export const ThemeContext = createContext({} as ThemeContextContract)
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState(LightTheme)

    const updateTheme = (dark: boolean) => {
        setDarkMode(dark)
        setTheme(dark ? DarkTheme : LightTheme)
    }

    return (
        <ThemeContext.Provider
            value={{ isDarkMode, setDarkMode: updateTheme, colors: theme.colors }}
        >
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
