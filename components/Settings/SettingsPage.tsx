import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight } from 'react-native'

/// Navigation
import 'react-native-gesture-handler'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import ToggleSwitch from 'toggle-switch-react-native'

function SettingsPage({ navigation }) {
    const { colors, setDarkMode, isDarkMode } = useTheme()

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.darkMode, { backgroundColor: colors.backgroundExtra }]}>
                <View style={styles.dmText}>
                    <Text style={[styles.dmTitle, { color: colors.text }]}>Mörkt läge</Text>
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
                    <Ionicons
                        style={[styles.arrow, { color: colors.text }]}
                        name='chevron-forward'
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
                    <Ionicons
                        style={[styles.arrow, { color: colors.text }]}
                        name='chevron-forward'
                        size={24}
                    />
                </View>
            </TouchableHighlight>
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
        paddingHorizontal: 15,
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    optionsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    settingsOption: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
})

export default SettingsPage
