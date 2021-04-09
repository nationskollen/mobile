/// This is used to render Settings page and screens relating to it

import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    StatusBar,
    Button,
} from "react-native";

/// Navigation
import "react-native-gesture-handler";

import HeaderSettings from "./HeaderSettings.js";

import { FontAwesome } from "@expo/vector-icons";

/// TODO: create a local navigation stack
/// TODO: factor out basically everything to a different file and replace it with a local stack navigator
function SettingsPage({ navigation }) {
    console.log("app reloaded, settings");
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle="dark-content"
            />
            <HeaderSettings />
            <View style={styles.darkMode}>
                <View style={styles.dmText}>
                    <Text style={styles.dmTitle}>Mörkt läge</Text>
                    <Text>
                        Ställ in detta för att förhindra ansträngda ögon
                    </Text>
                </View>
                <View style={styles.dmButton}>
                    <FontAwesome
                        name="toggle-off"
                        size={40}
                        color="black"
                        onPress={darkModeAction}
                    />
                </View>
            </View>
            <View style={styles.settingsOption}>
                <Text style={styles.optionsText}>Logga in</Text>
                <FontAwesome
                    style={styles.arrow}
                    name="long-arrow-right"
                    size={24}
                    color="black"
                />
            </View>
            <View style={styles.settingsOption}>
                <Text style={styles.optionsText}>Anpassa notifikationer</Text>
                <FontAwesome
                    style={styles.arrow}
                    name="long-arrow-right"
                    size={24}
                    color="black"
                />
            </View>
            <Button title="hoem" onPress={ () => navigation.navigate('Home')}/>
        </SafeAreaView>
    );
}

function darkModeAction() {
    console.log("change mode");
    alert("Switched mode");
}

const styles = StyleSheet.create({
    arrow: {
        alignSelf: "flex-end",
        position: "absolute",
        paddingRight: "10%",
        //backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    darkMode: {
        height: 150,
        backgroundColor: "#E0E0E0",
        flexDirection: "row",
    },
    dmButton: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dmText: {
        width: "70%",
        paddingLeft: 30,
        justifyContent: "center",
    },
    dmTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    optionsText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    settingsOption: {
        height: 75,
        paddingLeft: 30,
        justifyContent: "center",
        flexDirection: "column",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
    },
});

export default SettingsPage;
