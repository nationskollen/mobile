import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { useTheme } from '../ThemeContext'
import { View, Text } from 'react-native'
import { useTranslation } from '../../translate/LanguageContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'
import { CheckBox } from 'react-native-elements'
interface checkedStatesType {
    key: number
    name: string
    checked: boolean
}

var checkedStates: checkedStatesType[] = [
    { key: 0, name: 'English', checked: false },
    { key: 1, name: 'Svenska', checked: false },
]

const LanguagePage = () => {
    const { colors } = useTheme()
    const {
        setSelectedLanguage,
        setCurrentLanguage,
        initialLanguage,
        availableLanguages,
    } = useTranslation()
    const [currentlyChecked, setCurrentlyChecked] = useState(initialLanguage)

    checkedStates[currentlyChecked].checked = true

    const storeSelectedLanguage = async (chosenLanguageKey: number) => {
        await AsyncStorage.setItem('selectedLanguage', JSON.stringify(chosenLanguageKey))
    }

    const checkSelectedCheckbox = (key: number) => {
        storeSelectedLanguage(key)
        setSelectedLanguage(availableLanguages[key].value)
        checkedStates[key].checked = true
        checkedStates[currentlyChecked].checked = false
        setCurrentlyChecked(key)
        setCurrentLanguage(availableLanguages[key].langCode)
    }

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
                    fontFamily="NotoSans"
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
