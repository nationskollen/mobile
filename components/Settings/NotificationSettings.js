/// This component is used to render notification settings
import "react-native-gesture-handler";

import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import { MaterialIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

/// Renders all nations in a list
function NotificationSettings({ nationList }) {
    return (
        <ScrollView>
            {nationList.map((nation) => (
                <Nation key={nation.id} data={nation} />
            ))}
        </ScrollView>
    );
}

/// Returns component for given nation
function Nation({ data }) {
    const { colors } = useTheme();

    const [expand, setExpand] = useState(false);

    return (
        <View>
            <View
                key={data.id}
                style={[
                    styles.nationWrapper,
                    { backgroundColor: colors.background },
                ]}
            >
                {/*Logo of nation*/}
                <View style={styles.nationLogo}>
                    <View
                        style={[
                            styles.nationLogoImgWrapper,
                            { backgroundColor: colors.backgroundExtra },
                        ]}
                    >
                        <Image
                            source={data.logo}
                            style={styles.nationLogoImg}
                        />
                    </View>
                </View>

                {/*Name of nation*/}
                <View style={[styles.nationNameWrapper]}>
                    <Text style={[styles.nationName, { color: colors.text }]}>
                        {data.name}
                    </Text>
                </View>

                {/*Button for choosing nation*/}
                <MaterialIcons
                    name={expand ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                    size={24}
                    color={colors.text}
                    onPress={() => setExpand((state) => !state)}
                />
            </View>
            {expand && <NotiOptions />}
        </View>
    );
}

/// Renders the different notification options
function NotiOptions() {
    return (
        <View
            style={{
                justifyContent: "space-evenly",
                height: 200,
                borderBottomWidth: 1,
                borderBottomColor: "#E0E0E0",
            }}
        >
            {/*Temporary options*/}
            <NotiToggle text={"Prenumerera"} />
            <NotiToggle text={"Push notifikationer"} />
            <NotiToggle text={"Events"} />
            <NotiToggle text={"Nyheter"} />
        </View>
    );
}

/// Renders toggle switches
/// `text` is the name/title of the toggle
function NotiToggle({ text }) {
    const { colors } = useTheme();

    const [toggle, setToggle] = useState(false);

    return (
        <View style={optionStyles.switch}>
            <Text style={{ color: colors.text }}>{text}</Text>
            <ToggleSwitch
                isOn={toggle}
                onColor="#05c46b"
                offColor="grey"
                size="large"
                onToggle={() => {
                    setToggle((state) => !state);
                }}
            />
        </View>
    );
}

/// Styles for option switches
const optionStyles = StyleSheet.create({
    switch: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        alignItems: "center",
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        alignSelf: "stretch",
        height: 40,
        backgroundColor: "white",
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 1,
        flexDirection: "row",
    },

    headerTitle: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 25,
        //fontFamily:  "Arial", //not supported by android?
        marginLeft: "5%",
        paddingBottom: "3%",
    },

    cross: {
        position: "absolute",
        right: "4%",
        alignSelf: "center",
        width: 30,
        height: 30,
        //TODO: center the cross within itself
    },

    nationWrapper: {
        flexWrap: "wrap",
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        maxHeight: 90,
    },

    nationLogoImg: {
        width: "80%",
        height: "80%",
    },

    nationLogoImgWrapper: {
        justifyContent: "center",
        backgroundColor: "#E8E8E8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 65,
        height: 65,
        borderRadius: 50,
    },

    nationNameWrapper: {
        height: "100%",
        justifyContent: "center",
        flex: 1,
    },

    nationName: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
        paddingLeft: "5%",
    },

    chooseButtonWrapper: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
        backgroundColor: "#E8E8E8",
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    chooseButton: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
    },
});

export default NotificationSettings;
