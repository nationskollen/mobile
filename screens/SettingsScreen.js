import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Button, PickerIOSComponent, } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Footer from '../components/Footer';
import HeaderSettings from '../components/Settings/HeaderSettings.js'

import { FontAwesome } from '@expo/vector-icons';

function SettingsScreen({ navigation }) {
    console.log("app reloaded, settings")
    return (
        <SafeAreaView style={styles.container}>
            <HeaderSettings/>
            <View style={styles.darkMode}>
                <View style={styles.dmText}>
                    <Text style={styles.dmTitle}>Mörkt läge</Text>
                    <Text>Ställ in detta för att förhindra ansträngda ögon</Text>
                </View>
                <View style={styles.dmButton}>
                    <FontAwesome name="toggle-off" size={40} color="black" onPress={darkModeAction}/>
                </View>
            </View>
            <View style={styles.settingsOption}>
                <Text style={styles.optionsText}>Logga in</Text>
                <FontAwesome style={styles.arrow} name="long-arrow-right" size={24} color="black" />
            </View>
            <View style={styles.settingsOption}>
                <Text style={styles.optionsText}>Anpassa notifikationer</Text>
                <FontAwesome style={styles.arrow} name="long-arrow-right" size={24} color="black" />
            </View>
            <Button title="go home" onPress={() => navigation.navigate('Home')}/>
        </SafeAreaView>
    );
}

function darkModeAction() {
    console.log("change mode")
    alert("Switched mode");
}

const styles = StyleSheet.create({
    arrow: {
        alignSelf: 'flex-end',
        position: 'absolute',
        paddingRight: '10%',
        //backgroundColor: 'pink',
    },
    container: {
       flex:1,
    },
    darkMode: {
        height:150,
        backgroundColor: "#E0E0E0",
        flexDirection: 'row',
    },
    dmButton: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',  
        },
    dmText: {
        width: '70%',
        paddingLeft: 30,
        justifyContent:'center',
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
});

export default SettingsScreen;