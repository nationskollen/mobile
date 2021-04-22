import React, { useState, useEffect } from 'react';
import en from './languages/en.json';
import swe from './languages/swe.json';
import * as RNLocalize from 'react-native-localize';

const LanguageContext = React.createContext();
const languages = {
    en : en,
    swe : swe,
}

export const LanguageContextProvider: React.FC = ({children}) =>  {
    // Standard langauge is Swedish so we set the first state to swe
    const [languageSelected, setLanguageSelected] = useState('swe');
    useEffect(() => {
	const currentLanguage = RNLocalize.findBestAvailableLanguage(
	    Object.keys(languages),
	    );
	
	setLanguageSelected(currentLanguage?.languageTag || 'swe');
	}, []);

    const value = {...languages[languageSelected as 'en' | 'swe']};
    return ( 
	<LanguageContext.Provider value = {value}>
	    { children }
	</LanguageContext.Provider>
    )
}

export const useTranslation = () => useContext(LanguageContext);
