import React, { useState, useEffect, useContext} from 'react';
import en from './languages/en.json';
import swe from './languages/swe.json';
import App from '../App'
import { LanguageContextType } from './LanguageContextType';

import { NavigationContainer } from '@react-navigation/native'

export interface LanguageContextContract {
    setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>
    translate: LanguageContextType 

}
const LanguageContext = React.createContext<LanguageContextContract>({} as LanguageContextContract);

export interface Languages {
    english : string,
    swedish : string
}

const languageObj = {
    "Svenska" : swe,
    "English" : en 
};

export const useTranslation = () => useContext(LanguageContext);

export const LanguageContextProvider: React.FC = ({children}) => {
    const [selectedLanguage, setSelectedLanguage] = useState(swe );
    return (
	<LanguageContext.Provider value ={{setSelectedLanguage, translate: selectedLanguage}}>
	    {children}
	</LanguageContext.Provider>
    );
};


