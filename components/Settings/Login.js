/// This is used to render login page

import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

function Login() {
    const { colors } = useTheme();
    
    const [text, onChangeText] = React.useState("Useless Text");

    return (
	<View style={styles.container}>
	    <TextInput
		style={styles.input}
		onChangeText={onChangeText}
		value={text}
		placeholder="Användarnamn"
	    />
    	</View>
    )
}

const styles = StyleSheet.create({
    container: {
	flex:1,
	justifyContent: 'center',
    },
    input: {
	height: 40,
	margin: 10,
	borderWidth: 1,
    }
})

export default Login;
