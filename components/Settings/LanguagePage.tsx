import React, { useState, useCallback, useEffect } from 'react'
import 'react-native-gesture-handler'
import { useTheme } from '../ThemeContext'
import { View, Text } from 'react-native'
import { useTranslation } from '../../translate/LanguageContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'
import { CheckBox } from 'react-native-elements'
interface CheckedStatesType {
    key: number
    name: string
    checked: boolean
}

var checkedStates: CheckedStatesType[] = [
    { key: 0, name: 'English', checked: false },
    { key: 1, name: 'Svenska', checked: false },
]

const LanguagePage = () => {
    const { colors } = useTheme()
    const { setSelectedLanguage, setCurrentLangCode, availableLanguages } = useTranslation()
    const [currentlyChecked, setCurrentlyChecked] = useState<any>(async () => {
        const getSelectedLanguage = await AsyncStorage.getItem('savedLanguage')
        checkedStates[JSON.parse(getSelectedLanguage)].checked = true
        setCurrentlyChecked(JSON.parse(getSelectedLanguage))
    })

    const storeSelectedLanguage = useCallback(async (chosenLanguageKey: number) => {
        await AsyncStorage.setItem('savedLanguage', JSON.stringify(chosenLanguageKey))
    }, [])

    const checkSelectedCheckbox = (key: number) => {
        storeSelectedLanguage(key)
        setSelectedLanguage(availableLanguages[key].value)
        checkedStates[key].checked = true
        setCurrentlyChecked(key)
        checkedStates[currentlyChecked].checked = false
        setCurrentLangCode(availableLanguages[key].langCode)
    }

    console.log('currently checked' + currentlyChecked)
    return (
        <View>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            {checkedStates.map((option, index) => (
                <CheckBox
                    key={index}
                    center
                    size={24}
                    checkedColor={colors.primaryText}
                    title={
                        <Text
                            style={{
                                flex: 1,
                                color: colors.text,
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}
                        >
                            {option.name}
                        </Text>
                    }
                    fontFamily="Roboto_400Regular"
                    checked={option.checked}
                    iconRight
                    onPress={() => checkSelectedCheckbox(option.key)}
                    containerStyle={{
                        backgroundColor: colors.background,
                        borderColor: colors.border,
                    }}
                />
            ))}
        </View>
    )
}

export default LanguagePage
