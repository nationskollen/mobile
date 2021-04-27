/**
 * @category Settings
 * @module Login
 */
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native'

import { useTheme } from '../ThemeContext'

const LoginPage = () => {
    const { colors } = useTheme()
    const [text, onChangeText] = useState(null)
    const [password, onChangePassword] = useState(null)
    const [pass, setPass] = useState(false)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={[styles.titleText, { color: colors.text }]}>NATIONSKOLLEN</Text>
                {pass && (
                    <Text style={[styles.text, { color: colors.text }]}>
                        Fel lösenord eller användarnamn
                    </Text>
                )}
                <TextInput
                    style={[
                        styles.input,
                        {
                            backgroundColor: colors.backgroundExtra,
                            borderColor: colors.border,
                            color: colors.text,
                        },
                    ]}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Användarnamn"
                    placeholderTextColor={colors.unFocusedText}
                />
                <TextInput
                    style={[
                        styles.input,
                        {
                            backgroundColor: colors.backgroundExtra,
                            borderColor: colors.border,
                            color: colors.text,
                        },
                    ]}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Lösenord"
                    placeholderTextColor={colors.unFocusedText}
                    secureTextEntry={true}
                />
                <TouchableHighlight
                    onPress={() => setPass(true)}
                    underlayColor={colors.backgroundHighlight}
                    style={[
                        styles.loginButton,
                        {
                            borderColor: colors.primary,
                            backgroundColor: colors.primary,
                        },
                    ]}
                >
                    <Text style={[styles.loginText, { color: colors.focusedText }]}>Login</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        marginTop: '17%',
    },
    loginButton: {
        height: 35,
        marginHorizontal: 60,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
    },
    input: {
        height: 40,
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    text: {
        textAlign: 'center',
    },
    titleText: {
        textAlign: 'center',
        fontWeight: '100',
        fontSize: 26,
        letterSpacing: 3,
        marginBottom: 20,
    },
})

export default LoginPage
