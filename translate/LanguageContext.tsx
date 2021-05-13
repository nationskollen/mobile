import swe from './languages/swe'
import en from './languages/en'
import React, { useState, useContext } from 'react'
import LanguageContextType from './LanguageContextType'

export type LangCode = 'en-EN' | 'sv-SV'

export interface LanguageContextContract {
    setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>
    setCurrentLangCode: React.Dispatch<React.SetStateAction<LangCode>>
    translate: LanguageContextType
    currentLangCode: LangCode
    initialLanguage: number
    availableLanguages: AvailableLanguagesType[]
}

interface AvailableLanguagesType {
    key: number
    value: LanguageContextType
    langCode: LangCode
}

const LanguageContext = React.createContext<LanguageContextContract>({} as LanguageContextContract)

export const useTranslation = () => useContext(LanguageContext)

var availableLanguages: AvailableLanguagesType[] = [
    { key: 0, value: en, langCode: 'en-EN' },
    { key: 1, value: swe, langCode: 'sv-SV' },
]

export const LanguageContextProvider = ({ initialLanguage, children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(
        availableLanguages[initialLanguage].value
    )
    const [currentLangCode, setCurrentLangCode] = useState<LangCode>(
        availableLanguages[initialLanguage].langCode
    )

    return (
        <LanguageContext.Provider
            value={{
                setSelectedLanguage,
                translate: selectedLanguage,
                currentLangCode,
                setCurrentLangCode,
                availableLanguages,
                initialLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}
