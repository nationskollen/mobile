/**
 * @category Misc
 * @module ThemeContext
 */
import React, { createContext, useState, useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useAsync } from 'react-async-hook'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ThemeContextContract {
    isDarkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    colors: ThemeColors
}

export interface ThemeColors {
    primary: string
    primaryHighlight: string
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
    activityLevels: {
        low: string
        medium: string
        high: string
        veryHigh: string
        max: string
    }
}

export interface Theme {
    dark: boolean
    colors: ThemeColors
}

export const LightTheme: Theme = {
    dark: false,
    colors: {
        primary: '#71002E',
        primaryHighlight: '#91053d',
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
        activityLevels: {
            low: '#06e23d',
            medium: '#ede215',
            high: '#f7a000',
            veryHigh: '#f74a00',
            max: '#f71400',
        },
    },
}

export const DarkTheme: Theme = {
    dark: true,
    colors: {
        primary: '#71002E',
        primaryHighlight: '#91053d',
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
        activityLevels: {
            low: '#44fc37',
            medium: '#fcd837',
            high: '#f99661',
            veryHigh: '#f96164',
            max: '#fc2d30',
        },
    },
}

export const ThemeContext = createContext({} as ThemeContextContract)
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const { result: savedTheme } = useAsync(async () => {
        const theme = await AsyncStorage.getItem('savedTheme')
        return JSON.parse(theme)
    }, [])

    const updateTheme = (dark: boolean, skipStorageSave?: boolean) => {
        setTheme(dark ? DarkTheme : LightTheme)
        setDarkMode(dark)

        if (!skipStorageSave) {
            // Update the theme directly
            AsyncStorage.setItem('savedTheme', JSON.stringify(dark))
        }
    }

    const [theme, setTheme] = useState(LightTheme)
    const [isDarkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Skip theme update if the theme has not been loaded yet
        if (!savedTheme) {
            return
        }

        // Skip saving to async storage since we just read from there
        updateTheme(savedTheme, true)
    }, [savedTheme])

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
