import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight } from 'react-native'

/// Navigation
import 'react-native-gesture-handler'

import { useTheme } from '../ThemeContext'
import { FontAwesome } from '@expo/vector-icons'
import ToggleSwitch from 'toggle-switch-react-native'

import { useTranslation } from '../../translate/LanguageContext';
function SettingsPage({ navigation }) {
    const { colors, setDarkMode, isDarkMode } = useTheme()
    const {settings} = useTranslation();
    console.log(settings.header)

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.darkMode, { backgroundColor: colors.backgroundExtra }]}>
                <View style={styles.dmText}>
                    <Text style={[styles.dmTitle, { color: colors.text }]}>{settings.header}</Text>
                    <Text style={{ color: colors.text }}>
                        Ställ in detta för att förhindra ansträngda ögon
                    </Text>
                </View>
                <ToggleSwitch
                    isOn={isDarkMode}
                    onColor="#05c46b"
                    offColor="grey"
                    size="large"
                    onToggle={setDarkMode}
                />
            </View>
            <TouchableHighlight
                onPress={() => navigation.push('Login')}
                underlayColor={colors.backgroundHighlight}
            >
                <View style={[styles.settingsOption, { borderBottomColor: colors.border }]}>
                    <Text style={[styles.optionsText, { color: colors.text }]}>Logga in</Text>
                    <FontAwesome
                        style={[styles.arrow, { color: colors.text }]}
                        name="long-arrow-right"
                        size={24}
                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.push('NotificationSettings')}
                underlayColor={colors.backgroundHighlight}
            >
                <View style={[styles.settingsOption, { borderBottomColor: colors.border }]}>
                    <Text style={[styles.optionsText, { color: colors.text }]}>
                        Anpassa notifikationer
                    </Text>
                    <FontAwesome
                        style={[styles.arrow, { color: colors.text }]}
                        name="long-arrow-right"
                        size={24}
                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.push('LanguageSettings')}
                underlayColor={colors.backgroundHighlight}
            >
                <View style={[styles.settingsOption, { borderBottomColor: colors.border }]}>
                    <Text style={[styles.optionsText, { color: colors.text }]}>
                       Språk 
                    </Text>
                    <FontAwesome
                        style={[styles.arrow, { color: colors.text }]}
                        name="long-arrow-right"
                        size={24}
                    />
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    arrow: {
        alignSelf: 'flex-end',
        position: 'absolute',
        paddingRight: '10%',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    darkMode: {
        height: 150,
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: '#E0E0E0',
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
        marginRight: 5,
    },
    dmTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    optionsText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    settingsOption: {
        height: 75,
        paddingLeft: 30,
        justifyContent: 'center',
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
})

export default SettingsPage
