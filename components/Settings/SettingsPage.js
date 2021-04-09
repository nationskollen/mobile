/// This is used to render Settings page and screens relating to it

import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
} from "react-native";

/// Navigation
import "react-native-gesture-handler";

import { FontAwesome } from "@expo/vector-icons";
import ToggleSwitch from 'toggle-switch-react-native'

/// TODO: create a local navigation stack
/// TODO: factor out basically everything to a different file and replace it with a local stack navigator
function SettingsPage({ navigation }) {
    const [enabled, setEnabled] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.darkMode}>
                <View style={styles.dmText}>
                    <Text style={styles.dmTitle}>Mörkt läge</Text>
                    <Text>
                        Ställ in detta för att förhindra ansträngda ögon
                    </Text>
                </View>
                <ToggleSwitch
                    isOn={ enabled }
                    onColor="green"
                    offColor="red"
                    size="large"
                    onToggle={ setEnabled }
                />
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
        </SafeAreaView>
    );
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
        justifyContent: "space-between",
        paddingHorizontal: 30,
        backgroundColor: "#E0E0E0",
        flexDirection: "row",
    },
    dmButton: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dmText: {
        justifyContent: "center",
        flex: 1,
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
