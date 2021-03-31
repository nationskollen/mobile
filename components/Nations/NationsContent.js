// This is for rendering the header. 

import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';


const NationsContent = () => {
    return (
        <View>
            <CreateHeader/>
            <CreateNationsList/>
            <CreateNationsList/>
            <CreateNationsList/>
            <CreateNationsList/>
        </View>
    );
};

const CreateHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Välj Nation</Text>
            {/*Insert pressable "X" icon here*/}
        </View>
    );
}

const CreateNationsList = () => {

    return (
    <View style={styles.nationWrapper}>
        <View style = {styles.nationLogo}>
            <View style = {styles.nationLogoImgWrapper}>
                <Image source = {require("../../img/png/vdala/vdalalogga.png")} style = {styles.nationLogoImg}></Image>
            </View>
        </View>
        <Text style={styles.nationName}>V-Dala Nation</Text>
        <Button title={'Välj'} style={styles.chooseButton}></Button>
    </View>
    );
}


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
        alignSelf : 'flex-end',
        textAlign : "right",
        fontWeight: "bold",
        fontSize : 25,
        fontFamily:  "Arial",
        marginLeft : 30,
        paddingBottom: 15,
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
        width: '100%',
        height: '60%',

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

    nationName: {
        fontWeight : "bold",
        fontSize: 20,
        color : "black",
        marginTop: 28,
        paddingLeft: 15,
    },

    chooseButton: {
        paddingRight: 5,
    }
});

export default NationsContent;
