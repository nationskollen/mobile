
// This component is used for rendering each notification.

import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import App from '../App';
import * as Icons from "react-native-heroicons";
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { BellIcon } from '@heroicons/react/solid';
import { SvgCssUri} from 'react-native-svg';
import ArrowLeft from '../img/svg/common/ArrowLeft';


const NotificationContent = () => {
    return (
     <View style = {styles.notificationWrapper}>
        <View style = {styles.nationLogo}>
            <View style = {styles.nationLogoImgWrapper}>
                <Image source = {require("../img/png/vdala/vdalalogga.png")} style = {styles.nationLogoImg} ></Image>
            </View>
        </View>
        <View style = {styles.rectangle}></View>
        <View style = {styles.notificationContent}>
            <Text style = {styles.nationName}>V-dala nation</Text>
            <Text style = {styles.notificationHeader}> Lorem ipsum dolor sit amet</Text>
            <Text style = {styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vehicula sit amet sapien sagittis tempus. Quisque sagittis elementum nisi eu gravida.
                Aliquam quis pulvinar turpis. Quisque neque felis, ultricies at quam ac,
                fermentum ullamcorper ligula. 
            </Text>
        </View>
     </View>
    );
};

const styles = StyleSheet.create({

    notificationWrapper: {
        flexWrap : "wrap",
        alignSelf : "stretch",
        backgroundColor : "white",
        height : 150,
        marginTop : 15,
        borderBottomWidth : 1,
        borderColor : '#E0E0E0',

    },

    nationLogoImg : {
        marginLeft : "auto", 
        marginRight : "auto", 
        height : 30,
        width : 45,
    },

    nationLogoImgWrapper : {
        marginLeft: 15,
        justifyContent : "center",
        backgroundColor : "#E8E8E8",
        width : 50,
        height : 50,
        borderRadius : 50
    },

    notificationContent : {
        paddingTop : 5,
        paddingLeft : 20,
        backgroundColor : "white",
        width : 400,
        height : 140,
        paddingBottom : 15,
    },

    rectangle : {
        height : "50%",
        width : 5,
        marginLeft : "10.5%",
        marginTop : "1%",
        backgroundColor: "#E8E8E8"
    },

    notificationHeader : {
        fontSize : 20,
        fontWeight : "bold",
    },
    nationName : {
        fontWeight : "bold",
        color : "#71002E"
    },

    content : {
        overflow : "hidden",
    }
});


export default NotificationContent
