// This is for rendering the choose-nation view.
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

export default function ChooseNation({ nationList }) {
    /*TODO: Scroll does not seem to be working on android? (only ios)*/
    return (
        <ScrollView>
            {nationList.map((nation) => (
                <Nation key={nation.id} data={nation} />
            ))}
        </ScrollView>
    );
}

//Returns component for given nation
function Nation({ data }) {
    const navigation = useNavigation();
    const {colors} = useTheme();

    return (
        <View key={data.id} style={[styles.nationWrapper, {borderColor: colors.backgroundExtra}]}>
            {/*Logo of nation*/}
            <View style={styles.nationLogo}>
                <View style={[styles.nationLogoImgWrapper, {backgroundColor : colors.backgroundExtra}]}>
                    <Image source={data.logo} style={styles.nationLogoImg} />
                </View>
            </View>

            {/*Name of nation*/}
            <View style={styles.nationNameWrapper}>
                <Text style={[styles.nationName, {color : colors.text}]}>{data.name}</Text>
            </View>

            {/*Button for choosing nation*/}
            <TouchableOpacity
                onPress={() =>
                    navigation.push("NationContent", { nation: data })
                }
                style={styles.chooseButtonWrapper}
            >
                <Text style={styles.chooseButton}>Välj</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
        borderBottomWidth: 1,
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
