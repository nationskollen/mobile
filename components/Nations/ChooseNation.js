// This is for rendering the choose-nation view.
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";

export default function ChooseNation({ nationList }) {
    return (
        <View>
            <RenderHeader />
            {/*TODO: Scroll does not seem to be working on android? (only ios)*/}
            <ScrollView>
                <RenderNationList nationList={nationList} />
            </ScrollView>
        </View>
    );
}

const RenderHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {/*Header title*/}
            <Text style={styles.headerTitle}>Välj Nation</Text>

            {/*Clickable cross to close this page. Current onPress should be replaced.*/}
            <Entypo
                name="cross"
                size={24}
                color="black"
                style={styles.cross}
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};

//Returns list of components for every nation
function RenderNationList({ nationList }) {
    let renderedNationList = [];
    for (let nation in nationList) {
        renderedNationList.push(renderNation(nationList[nation]));
    }

    return renderedNationList;
}

//TODO: renderNation function (in NationsContent.js) is unable to find images variable with file path
//Returns component for given nation
function renderNation(nation) {
    const navigation = useNavigation();

    return (
        <View key={nation.id} style={styles.nationWrapper}>
            {/*Logo of nation*/}
            <View style={styles.nationLogo}>
                <View style={styles.nationLogoImgWrapper}>
                    <Image source={nation.logo} style={styles.nationLogoImg} />
                </View>
            </View>

            {/*Name of nation*/}
            <View style={styles.nationNameWrapper}>
                <Text style={styles.nationName}>{nation.name}</Text>
            </View>

            {/*Button for choosing nation*/}
            <TouchableOpacity
                onPress={() =>
                    navigation.push("NationContent", {
                        nation,
                    })
                }
                style={styles.chooseButtonWrapper}
            >
                <Text style={styles.chooseButton}>Välj</Text>
            </TouchableOpacity>
        </View>
    );
}

//map functionality
/*<View>
            {Object.values(nationList).map((item)=>{
                console.log(item)
                return (
                    <View>
                        <Text>namn2:{item.name}</Text>
                    </View>
                )
            })}
        </View>*/

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
