import swe from './languages/swe'
import React, { useState, useContext } from 'react'
import LanguageContextType from './LanguageContextType'

export interface LanguageContextContract {
    setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>
    translate: LanguageContextType
}
const LanguageContext = React.createContext<LanguageContextContract>({} as LanguageContextContract)

export const useTranslation = () => useContext(LanguageContext)

export const LanguageContextProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(swe)

    return (
        <LanguageContext.Provider value={{ setSelectedLanguage, translate: selectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
