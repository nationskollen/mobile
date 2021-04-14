// This is for rendering the nation content.
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useDarkMode } from "../ThemeContexts";

import { useNavigation } from "@react-navigation/core";
import React from "react";

/// Renders food components
/// Renders event components
/// Renders activity bar
import RenderActivityBar from "../Nations/NationContentComponents/ActivityLevel";

import { useTheme } from "@react-navigation/native";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";


export  default function RenderMapPopup({ nation }) {
    //TODO: add openinghours and address to nation object
    //TODO: add color theme to nation, so that icons can match
    const {colors} = useTheme();
    console.log(nation);
    return (
        <SafeAreaView>
	    <View style={[nationStyles.nationInfoWrapper, {backgroundColor : colors.backgroundExtra}]}> 
                <View style={nationStyles.nationNameWrapper}>
                    <Text style={[nationStyles.nationName, {color : colors.text}]}>
                        {nation.nickname}
                    </Text>
                    <View style={[headerStyles.logoWrapper, {backgroundColor : colors.backgroundExtra}]}>
                        <Image source={nation.logo} style={headerStyles.logo } />
                    </View>
                </View>

                <View style={[nationStyles.clockSymbolWrapper, {backgroundColor : colors.backgroundExtra}]}>
                    <AntDesign name="clockcircle" size={20} color= {colors.text} />
                    <Text style={[nationStyles.openinghoursTitle, {color : colors.text}]}>
                        Öppettider
                    </Text>
                </View>

                <View style={[nationStyles.openinghoursWrapper, {backgroundColor : colors.backgroundExtra}]}>
                    <View style={[nationStyles.lineSymbol, {backgroundColor : colors.text}]}></View>
                    <View style={[nationStyles.openinghoursTextWrapper, {backgroundColor : colors.backgroundExtra}]}>
                        <Text style={[nationStyles.openinghoursText, {color : colors.text}]}>
                            Mån-Fre: 10:00-20:00
                        </Text>
                        <Text style={[nationStyles.openinghoursText, {color : colors.text}]}>
                            Lör-Sön: Stängt
                        </Text>
                    </View>
                </View>

                <View style={nationStyles.mapWrapper}>
                    <View style={nationStyles.mapSymbolWrapper}>
                        <MaterialIcons
                            name="location-on"
                            size={16}
                            color="white"
                        />
                    </View>
                    <View style={nationStyles.mapSymbolCircle}></View>
                    <Text
                        style={[nationStyles.mapAddress, {color : colors.text}]}
                        onPress={() =>
                            Alert.alert(
                                "Öppna i kartor?",
                                "Tryck OK för att öppna addressen i kartor",
                                [
                                    {
                                        text: "Avbryt",
                                        onPress: () =>
                                            console.log("Avbryt Pressed"), style: "Avbryt", },
                                    {
                                        text: "OK",
                                        onPress: () =>
                                            console.log("OK Pressed"),
                                    },
                                ],
                                {
                                    cancelable: false,
                                }
                            )
                        }
                    >
                        S:t Larsgatan 13, Uppsala, 75311
                    </Text>
                </View>
            </View>

            <RenderActivityBar nation={nation}></RenderActivityBar>
        </SafeAreaView>
    );
}
const headerStyles = StyleSheet.create({
    header: {
        alignSelf: "stretch", // 100% width
        height: 50,
        backgroundColor: "white",
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 1,
        justifyContent: "center",
    },

    arrowBack: {
        marginLeft: 10,
        width: 30,
        height: 25,
    },

    logoWrapper: {
        // alignSelf: "flex-end",
        marginLeft: "5%",
        //position: "absolute",
        width: 50,
        height: 50,
	borderRadius :50
    },

    logo: {
        width: "100%",
        height: "100%",
	
    },
});

//styles for nation info
const nationStyles = StyleSheet.create({
    nationInfoWrapper: {
        backgroundColor: "#F3F3F3",
	position : 'absolute',
	bottom : 45,
        height: 220, 
        width: "100%",
    },

    nationNameWrapper: {
        flexDirection: "row",
        paddingLeft: "7%",
        alignItems: "center",
    },

    nationName: {
        fontSize: 26,
        fontWeight: "bold",
    },

    openinghoursWrapper: {
        flexDirection: "row",
        marginLeft: "6.5%",
        marginTop: 6,
    },

    clockSymbolWrapper: {
        flexDirection: "row",
        marginTop: 15,
        marginLeft: "7%",
        alignItems: "center",
    },

    openinghoursTitle: {
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: 10,
    },

    openinghoursTextWrapper: {
        justifyContent: "space-evenly",
        marginLeft: 10,
    },

    openinghoursText: {
        fontSize: 12,
    },

    lineSymbol: {
        marginLeft: 10,
        width: 4,
        height: 50,
        borderRadius: 5,
        backgroundColor: "black",
    },

    mapWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },

    mapSymbolWrapper: {
        marginLeft: "7.5%",

        zIndex: 2,
        elevation: Platform.OS === "android" ? 2 : 0,
    },

    mapSymbolCircle: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "black",
        position: "absolute",
        left: "7%",

        zIndex: 1,
        elevation: Platform.OS === "android" ? 1 : 0,
    },

    mapAddress: {
        marginLeft: "14%",
        fontSize: 14,
        fontWeight: "bold",
        zIndex: 3,
    },
});
