// This is for rendering the header of settings

import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HeaderSettings(props) {
    return (
        <View style={styles.header}>
            <View style={styles.arrow}></View>
            <View style={styles.text}>
                <Text style={styles.text}>Inställningar</Text>
            </View>
        </View>
    );
}

export default HeaderSettings;

const styles = StyleSheet.create({
    arrow: {
        width: 50,
        //backgroundColor: 'pink',
    },
    header: {
        height: 60,
        //backgroundColor: "darkgray",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
    },
    textContainer: {
        flex: 1,
        backgroundColor: "purple",
    },
    text: {
        justifyContent: "center",
        fontSize: 35,
    },
});
