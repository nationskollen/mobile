import React from 'react'
import 'react-native-gesture-handler'
import { useTheme } from '../ThemeContext'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from '../../translate/LanguageContext'

import ListButton from '../ListButton'
import en from '../../translate/languages/en.json'
import swe from '../../translate/languages/swe.json'

const LanguagePage = () => {
    const { colors } = useTheme()
    const { setSelectedLanguage } = useTranslation()

    // TODO: Update rightIcon of the list buttons to show a checkbox (?)
    return (
        <View>
            <ListButton
                title="English"
                leftIcon={
                    <View style={[styles.icon, { backgroundColor: colors.backgroundHighlight }]}>
                        <Text style={[styles.text, { color: colors.text }]}>ENG</Text>
                    </View>
                }
                onPress={() => setSelectedLanguage(en)}
            />
            <ListButton
                title="Svenska"
                leftIcon={
                    <View style={[styles.icon, { backgroundColor: colors.backgroundHighlight }]}>
                        <Text style={[styles.text, { color: colors.text }]}>SWE</Text>
                    </View>
                }
                onPress={() => setSelectedLanguage(swe)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        borderRadius: 10,
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontWeight: 'bold',
    },
})

export default LanguagePage
