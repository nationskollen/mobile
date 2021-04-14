//This file renders activity level components for NationContent
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native"
import React from "react";

//renders activity bar
export default function RenderActivityBar({ nation }) {
    const {colors} = useTheme();
    return (
	<View style={styles.activitybar}> 
            <View style={styles.activitybarLogo}>
                <Ionicons name="md-people-outline" size={24} color="white" />
            </View>

            <Text style={styles.activitybarText}>Aktivitet</Text>

            <RenderActivityComponent activityLevel={getActivityLevel(nation)}></RenderActivityComponent>
        </View>
    );
}

//dummy for retrieving activity level of given nation
//TODO: replace with function that communicates with SDK
function getActivityLevel({ nation }) {
    return "low";
}

//function that returns a component with a colored circle and text - determined by the activity level
function RenderActivityComponent({activityLevel}) {
    const {colors} = useTheme();
    var color, title
    switch (activityLevel) {
        case "closed": {
            title="Stängt"
            color="black"
        } break
        case "low": {
            title="Låg"
            color="green"
        } break
        case "medium": {
            title="Medel"
            color="yellow"
        } break
        case "high": {
            title="Hög"
            color="red"
        } break
        default:{
            title="Ej tillgänglig"
            color="white"
        }
    }
    return (
        <View style={styles.activityLevelWrapper}>
            <View
                style={styles.activityCircle}
                backgroundColor={color}
            ></View>
            <Text style={styles.activityLevelText}>{title}</Text>
        </View>
    )
}

//styles for activitybar
const styles = StyleSheet.create({
    activitybar: {
	position : 'absolute',
	bottom : 0,
        flexDirection: "row",
        height: 45,
        width: "100%",
        backgroundColor: "#2F2F2F",
        alignSelf: "flex-end",
        alignItems: "center",
    },

    activitybarText: {
        color: "white",
        fontSize: 14,
        marginLeft: "3%",
    },

    activitybarLogo: {
        marginLeft: "5%",
        marginBottom: "0.5%",
    },

    activityLevelWrapper: {
        flexDirection: "row",
        position: "absolute",
        right: "5%",
    },

    activityCircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        alignSelf: "center",
    },

    activityLevelText: {
        marginLeft: 10,
        color: "white",
        fontSize: 16,
    },
});
