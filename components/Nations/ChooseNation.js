// This is for rendering the choose-nation view. 
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {App, nationListEx} from '../../App.js';
export default function ChooseNation({nationList}) {
	console.log(this);
    return (
        <View>
            <RenderHeader/>
            {/*TODO: Scroll does not seem to be working on android? (only ios)*/}
            <ScrollView>
                <RenderNationList nationList={nationList}/>
            </ScrollView>
        </View>
    );
};

const RenderHeader = () => {
    return (
        <View style={styles.header}>
            {/*Header title*/}
            <Text style={styles.headerTitle}>Välj Nation</Text>

            {/*Clickable cross to close this page. Current onPress should be replaced.*/}
            <Entypo name="cross" size={24} color="black" style={styles.cross} onPress={()=>Alert.alert("(Cross) was pressed")}/>
            
        </View>
    );
}

//Returns list of components for every nation
function RenderNationList({nationList}) {
    let renderedNationList = [];
    for (let nation in nationList) {
        renderedNationList.push(renderNation(nationList[nation]))
    }

    return (
        renderedNationList
    );
}


//TODO: renderNation function (in NationsContent.js) is unable to find images variable with file path
//Returns component for given nation
function renderNation(nation) {

 const name = nation.name.toString();
var source = nationListEx['norrlands'];
    return (
        <View style={styles.nationWrapper}>
		{/*Logo of nation*/}
            <View style = {styles.nationLogo}>
                <View style = {styles.nationLogoImgWrapper}>
			<Image source = {nationListEx[nation.id].logo}  style = {styles.nationLogoImg}/>
                </View>
            </View>

            {/*Name of nation*/}
            <View style={styles.nationNameWrapper}>
                <Text style={styles.nationName}>{nation.name}</Text>
            </View>

            {/*Button for choosing nation*/}
            <TouchableOpacity onPress={()=>Alert.alert("(Välj) was pressed")} style={styles.chooseButtonWrapper}>
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
    header : {
        alignSelf: "stretch",
        height: 40,
        backgroundColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        flexDirection : "row",

    },

    headerTitle : {
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize : 25,
        //fontFamily:  "Arial", //not supported by android?
        marginLeft : '5%',
        paddingBottom:'3%',
    },

    cross: {
        position: 'absolute',
        right: '4%',
        alignSelf: 'center',
        width: 30,
        height: 30,
        //TODO: center the cross within itself

    },

    nationWrapper: {
        flexWrap : "wrap",
        alignSelf : "stretch",
        backgroundColor : "white",
        height : 80,

        borderBottomWidth : 1,
        borderColor : '#E0E0E0',

    },

    nationLogoImg : {
        marginLeft : "auto", 
        marginRight : "auto", 
        width: '80%',
        height: '80%',

    },

    nationLogoImgWrapper : {
        marginLeft: 15,
        marginTop: 4,
        justifyContent : "center",
        backgroundColor : "#E8E8E8",
        width : 70,
        height : 70,
        borderRadius : 50
    },

    nationNameWrapper: {
        height: '100%',
        maxWidth: '55%',
        justifyContent: 'center',
    },

    nationName: {
        fontWeight : "bold",
        fontSize: 18,
        color : "black",
        paddingLeft: '5%',
    },

    chooseButtonWrapper: {
        height: 30,
        width: 80,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: '#E8E8E8',
        position: 'absolute',
        right: '4%',
        marginVertical: 25,
    },

    chooseButton: {
        textAlign: 'center',
        paddingVertical: '6%', //TODO: replace with some centering property for accuracy
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

