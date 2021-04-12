//This file renders food related components

//Used to render various dropdown menus
import RenderDropDownHeader from './Dropdown'

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import React from "react";


//renders entire dropdown menu with food content
export default function RenderFoodMenu({ nation }) {
    return (
        <RenderDropDownHeader 
            title={"Meny"}
            expandComponent={renderFoodCategories(nation)}
            icon = {<Ionicons 
                        name="md-fast-food-outline" 
                        size={28} 
                        color="black"
                    />}
        ></RenderDropDownHeader>
    );
}

//returns rendered food categories
function renderFoodCategories(nation){
    var foodCategories = ["Dryck", "Förrätt", "Huvudrätt", "Efterrätt", "Fika"];
    
    return (
        foodCategories.map((category) => (
            <RenderDropDownHeader
                key={category}
                title={category}
                icon ={ <View style={styles.foodCategoryIcon}>
                            <Octicons name="primitive-dot" size={22} color="#71002E" />
                        </View>}
                expandComponent={renderListFromCategory(nation,category)}
                nation={nation}
             />
        ))
     )
}

//render all food or drink items from input category object
function renderListFromCategory(nation, category) {
    //list of food/drinks in category
    var list = getFoodMenu(nation)[category];

    var renderedList = [];
    var description;

    for (let i in list) {
        description = category == "Dryck" ? list[i].size+", "+list[i].type : list[i].description

        renderedList.push(
            <View key={list[i].name} style={styles.itemBorder}>
                <View style={styles.itemWrapper}>
                    <Text style={styles.nameText}>{list[i].name}</Text>
                    <Text style={styles.descriptionText}>
                        {description}
                    </Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.priceText}>
                            {list[i].price + " kr"}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    return <View style={styles.listContainer}>{renderedList}</View>;
}

//TODO: replace with SDK function
function getFoodMenu(nation) {
    return {
        "Dryck": {
            norrlandsguld: {
                name: "Norrlands Guld",
                size: "50cl",
                price: "40",
                type: "Fatöl",
                description: "",
                id: "norrlandsguld",
            },
            gränges: {
                name: "Gränges",
                size: "33cl",
                price: "30",
                type: "burk",
                description: "",
                id: "gränges",
            },
        },

        "Förrätt": {},

        "Huvudrätt": {
            pannkakor: {
                name: "Goa Pannkakor",
                description:
                    "Oförståeligt befruktande smak. Once you go Goa Pannkakor you never go back.",
                ingredients: ["ägg", "mjölk", "mjöl", "salt", "smör", "socker"],
                allergies: ["ägg", "laktos", "gluten", "socker"],
                price: "45",
                image: "",
            },
            quesadillas: {
                name: "Krispiga Quesadillas",
                description:
                    "6 stycken krispiga, ostiga, kycklingfyllda och oförglömliga quesadillas",
                ingredients: [
                    "kyckling",
                    "rödlök",
                    "ost",
                    "tortilla",
                    "majs",
                    "paprika",
                ],
                allergies: ["rödlök", "laktos", "gluten"],
                price: "60",
                image: "",
            },
        },
    };
}

//styles for food/drink list
const styles = StyleSheet.create({
    itemBorder: {
        borderBottomWidth: 1,
        borderColor: "lightgray",
    },

    itemWrapper: {
        marginLeft: "7%",
        marginTop: "2%",
    },

    nameText: {
        marginVertical: 3,
        fontWeight: "bold",
        fontSize: 16,
    },
    descriptionText: {
        marginTop: 3,
        marginBottom: 10,
        maxWidth: "70%",
    },

    priceWrapper: {
        backgroundColor: "lightgreen",
        position: "absolute",
        right: "5%",
        top: "35%",
        width: 45,
        height: 25,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    priceText: {
        color: "black",
        fontSize: 15,
    },

    foodCategoryIcon: {
        marginLeft: "15%",
    },
});
