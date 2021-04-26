/**
 * @category Settings
 * @module SettingsPage
 */
import React from 'react'
import 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'

import { useTheme } from '../ThemeContext'
import { useTranslation } from '../../translate/LanguageContext';

import ListButton from '../ListButton'
import ToggleSwitch from 'toggle-switch-react-native'

export interface Props {
    navigation: StackNavigationProp<any, any>
}

const SettingsPage = ({ navigation }: Props) => {
    const { colors, setDarkMode, isDarkMode } = useTheme()
    const {translate} = useTranslation();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.darkMode, { backgroundColor: colors.backgroundExtra }]}>
                <View style={styles.dmText}>
                    <Text style={[styles.dmTitle, { color: colors.textHighlight }]}>
                        {translate.settings.darkmodeheader}
                    </Text>
                    <Text style={{ color: colors.text }}>
			{translate.settings.darkmodedescription}
                    </Text>
                </View>
                <ToggleSwitch
                    isOn={isDarkMode}
                    onColor="#05c46b"
                    offColor={colors.borderDark}
                    size="large"
                    onToggle={setDarkMode}
                />
            </View>
            <ListButton
                title={translate.settings.login}
                onPress={() => navigation.push('Login')}
                leftIcon={<Ionicons name="lock-closed-outline" size={24} color={colors.text} />}
            />
            <ListButton
                title={translate.settings.notifications}
                onPress={() => navigation.push('NotificationSettings')}
                leftIcon={<Ionicons name="filter" size={24} color={colors.text} />}
            />
            <ListButton
                title={translate.settings.language}
                onPress={() => navigation.push('LanguageSettings')}
                leftIcon={<Ionicons name="language" size={24} color={colors.text} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    darkMode: {
        height: 125,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    dmButton: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dmText: {
        justifyContent: 'center',
        flex: 1,
        marginRight: 15,
    },
    dmTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default SettingsPage
