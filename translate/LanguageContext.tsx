import swe from './languages/swe'
import React, { useState, useContext } from 'react'
import LanguageContextType from './LanguageContextType'

export type LangCode = 'en-EN' | 'sv-SV'

export interface LanguageContextContract {
    setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>
    setCurrentLanguage: React.Dispatch<React.SetStateAction<LangCode>>
    translate: LanguageContextType
    currentLanguage: LangCode
    activeLanguageKey : number,
    setActiveLanguageKey: React.Dispatch<React.SetStateAction<number>>
}
const LanguageContext = React.createContext<LanguageContextContract>({} as LanguageContextContract)

export const useTranslation = () => useContext(LanguageContext)

export const LanguageContextProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(swe)
    const [activeLanguageKey, setActiveLanguageKey] = useState(1)
    const [currentLanguage, setCurrentLanguage] = useState<LangCode>('sv-SV')

    return (
        <LanguageContext.Provider
            value={{
		activeLanguageKey,
		setActiveLanguageKey,
                setSelectedLanguage,
                translate: selectedLanguage,
                currentLanguage,
                setCurrentLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}
