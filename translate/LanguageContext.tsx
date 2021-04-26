import React, { useState, useEffect, useContext} from 'react';
import en from './languages/en.json';
import swe from './languages/swe.json';
import App from '../App'
import { LanguageContextType } from './LanguageContextType';

import { NavigationContainer } from '@react-navigation/native'
const LanguageContext = React.createContext<LanguageContextType>({} as LanguageContextType);


const languageObj = {
    "en" : en,
    "swe" : swe,
};


export const LanguageContextProvider: React.FC = ({children}) => {
    console.log('cock' + LanguageContext)
    const [selectedLanguage, setSelectedLanguage] = useState("swe");

        const value = {
	...languageObj[selectedLanguage as "swe" | "en"],
    };

	console.log(selectedLanguage)
    return (
	<LanguageContext.Provider value ={value}>
	    {children}
	</LanguageContext.Provider>
    );
};


export const useTranslation = () => useContext(LanguageContext);
