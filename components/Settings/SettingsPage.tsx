import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight } from 'react-native'

/// Navigation
import 'react-native-gesture-handler'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'

import ListButton from '../ListButton'
import ToggleSwitch from 'toggle-switch-react-native'

function SettingsPage({ navigation }) {
    const { colors, setDarkMode, isDarkMode } = useTheme()

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.darkMode, { backgroundColor: colors.backgroundExtra }]}>
                <View style={styles.dmText}>
                    <Text style={[styles.dmTitle, { color: colors.textHighlight }]}>
                        Mörkt läge
                    </Text>
                    <Text style={{ color: colors.text }}>
                        Ställ in detta för att förhindra ansträngda ögon
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
                title="Logga in"
                onPress={() => navigation.push('Login')}
                leftIcon={<Ionicons name="lock-closed-outline" size={24} color={colors.text} />}
            />
            <ListButton
                title="Anpassa notifikationer"
                onPress={() => navigation.push('NotificationSettings')}
                leftIcon={<Ionicons name="filter" size={24} color={colors.text} />}
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
