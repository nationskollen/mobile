import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from '../../translate/LanguageContext'
import ListButton from '../ListButton'
import en from '../../translate/languages/en'
import swe from '../../translate/languages/swe'
import FocusAwareStatusBar from '../FocusAwareStatusBar'
import { CheckBox } from 'react-native-elements'
var checkedStates = [
    { key: 0, name: 'English', checked: false, value: en },
    { key: 1, name: 'Svenska', checked: true, value: swe },
]

var initialState = 1;

const LanguagePage = () => {
    const { colors } = useTheme()
    const { setSelectedLanguage } = useTranslation()
    const [currentlyChecked, setCurrentlyChecked] = useState(initialState)

       const uncheckPreviousCheckbox = (key : any) => {
	checkedStates[key].checked = false;
       }

    const checkSelectedCheckbox = (selectedLanguage : any, key : number) => {
	setSelectedLanguage(selectedLanguage)
    	checkedStates[key].checked = true;	
	uncheckPreviousCheckbox(currentlyChecked)
	setCurrentlyChecked(key)
	initialState = key;
    }

    return (
        <View>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            {checkedStates.map((option) => (
                <CheckBox
		    center
		    size={24}
		    checkedColor= '#71002E'
		    title={<Text style={{flex:1, color: colors.text, fontSize: 16, fontWeight: 'bold'}}>{option.name}</Text>}
		    fontFamily='Roboto'
                    checked={option.checked}
                    iconRight
                    onPress={() => checkSelectedCheckbox(option.value, option.key) }
		    containerStyle = {{backgroundColor: colors.background, borderColor: colors.border}}
                />
            ))}
        </View>
    )
}

export default LanguagePage
