import swe from './languages/swe'
import React, { useState, useContext } from 'react'
import LanguageContextType from './LanguageContextType'

export interface LanguageContextContract {
    setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>
    translate: LanguageContextType
    currentLanguage : string
}
const LanguageContext = React.createContext<LanguageContextContract>({} as LanguageContextContract)

export const useTranslation = () => useContext(LanguageContext)

export const LanguageContextProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(swe)
    const [currentLanguage, setCurrentLanguage] = useState('sv')

    return (
        <LanguageContext.Provider value={{ setSelectedLanguage, translate: selectedLanguage, currentLanguage, setCurrentLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
