
/// This component is used to get the bottom

import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, FlexStyle} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
const Bottom = () => {
    return (
        <View style = {styles.footer}>
            <View name = "logoWrapper" style = {styles.logoWrapper}>

                <View style = {styles.singleLogo}>
                    <FontistoIcon name = "bell" size={30} color="white" />
                </View>

                <View style = {styles.singleLogo}>
                    <AntIcon name = "calendar" size={30} color="white" />
                </View>

                <View style = {styles.singleLogo}>
                    <AntIcon name = "home" size={30} color="white" />
                </View>

                <View style = {styles.singleLogo}>
                    <EntypoIcon name = "map" size={30} color="white" />
                </View>

                <View style = {styles.singleLogo}>
                    <FeatherIcon name = "settings" size={30} color="white" />
                </View>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#71002E',
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },

    position: {
        backgroundColor: '#71002E',
        height: 75,
        //alignSelf: 'flex-end',
    },

    home: {

    },

    logoWrapper : {
        alignItems : "center",
        marginTop : 10,
        fontSize : 20,
        flexDirection : 'row',

    },
    singleLogo : {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    }
});

export default Bottom
