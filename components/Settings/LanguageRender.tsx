import React from 'react'
import 'react-native-gesture-handler'
import { ScrollView } from 'react-native-gesture-handler'
import en from '../../translate/languages/en.json';
import swe from '../../translate/languages/swe.json';
import { Language, AvailableLanguages} from './Language'

/// Renders all nations in a list
const LanguagesRender = () => {

    return (
        <ScrollView>
	    {/* English */}
	    <Language data={AvailableLanguages[0]} onLanguageClicked={en}/>
	    {/* Swedish */}
	    <Language data={AvailableLanguages[1]} onLanguageClicked={swe} />
        </ScrollView>
    )
    
}

export default LanguagesRender; 
