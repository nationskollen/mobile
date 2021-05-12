import swe from './languages/swe'
import en from './languages/en'
import React, { useState, useContext } from 'react'
import LanguageContextType from './LanguageContextType'

export type LangCode = 'en-EN' | 'sv-SV'

export interface LanguageContextContract {
    setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>
    setCurrentLanguage: React.Dispatch<React.SetStateAction<LangCode>>
    translate: LanguageContextType
    currentLanguage: LangCode
    initialLanguage: number
    availableLanguages: availableLanguagesType[]
}

interface availableLanguagesType {
    key: number
    value: LanguageContextType
    langCode: LangCode
}

const LanguageContext = React.createContext<LanguageContextContract>({} as LanguageContextContract)

export const useTranslation = () => useContext(LanguageContext)

var availableLanguages: availableLanguagesType[] = [
    { key: 0, value: en, langCode: 'en-EN' },
    { key: 1, value: swe, langCode: 'sv-SV' },
]

export const LanguageContextProvider = ({ initialLanguage, children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(
        availableLanguages[initialLanguage].value
    )
    const [currentLanguage, setCurrentLanguage] = useState<LangCode>(
        availableLanguages[initialLanguage].langCode
    )

    return (
        <LanguageContext.Provider
            value={{
                setSelectedLanguage,
                translate: selectedLanguage,
                currentLanguage,
                setCurrentLanguage,
                availableLanguages,
                initialLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}
