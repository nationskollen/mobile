import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native"
import React, {useState} from "react";

//renders expandable dropdown menu header 
export default function RenderDropDownHeader({ title, expandComponent, icon}) {

    const [expand, setExpand] = useState(false)

    return (
        <View key={title}>
            <View style={styles.header}>
                <View style={styles.iconWrapper}>{icon}</View>

                <Text style={styles.headerTitle}>{title}</Text>

                <View style={styles.headerPlusWrapper}>
                    <AntDesign
                        name={expand ? "minuscircle":"pluscircle"}
                        size={32}
                        color="#AEAEAE"
                        onPress={()=>setExpand(state=>!state)}
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


/*   
    //decide which icon and title should be displayed
    switch (type) {
        case "food":
            icon = (
                <Ionicons name="md-fast-food-outline" size={28} color="black" />
            );
            title = title ? title : "Meny";
            //if menu is expanded, show its subcomponents
            expandedMenuComponent = expand && <RenderFoodCategories nation={nation} expand={expand}></RenderFoodCategories>
            break;

        case "event":
            icon = <MaterialIcons name="event" size={24} color="black" />;
            title = title ? title : "Evenemang";
            break;

        case "info":
            icon = <Foundation name="info" size={24} color="black" />;
            title = title ? title : "Info";
            break;

        case "foodcategory":
            icon = (
                <View style={styles.foodCategory}>
                    <Octicons name="primitive-dot" size={22} color="#71002E" />
                </View>
            );
            title = title ? title : "?";
            expandedMenuComponent = expand && <RenderListFromCategory list={getFoodMenu(nation)[title]} category={title}/> 
            break;

        default:
            icon = <View></View>;
            title = "";
            console.log("error: type of dropdown header not found");
    }
*/