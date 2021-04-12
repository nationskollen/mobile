import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

//renders expandable dropdown menu header
export default function RenderDropDownHeader({ title, expandComponent, icon }) {
    const [expand, setExpand] = useState(false);

    return (
        <View key={title}>
            <View style={styles.header}>
                <View style={styles.iconWrapper}>{icon}</View>

                <Text style={styles.headerTitle}>{title}</Text>

                <View style={styles.headerPlusWrapper}>
                    <AntDesign
                        name={expand ? "minuscircle" : "pluscircle"}
                        size={32}
                        color="#AEAEAE"
                        onPress={() => setExpand((state) => !state)}
                    />
                </View>
            </View>

            {/*If menu is expanded, show expandComponent*/}
            {expand && expandComponent}
        </View>
    );
}

//styles for dropdown menu
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        height: 60,
        borderBottomWidth: 1,
        alignItems: "center",
    },

    iconWrapper: {
        marginLeft: 20,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        position: "absolute",
        marginLeft: 60,
    },

    headerPlusWrapper: {
        position: "absolute",
        right: 30,
    },
});
