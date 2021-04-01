
/// This component is used to get the bottom

import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, FlexStyle, TouchableHighlight} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Bottom = () => {
    return (
        <View style={styles.bottom}>
            <View style = {styles.position}>
                <View style = {styles.home}>
                    <SimpleLineIcons name="bell" size={25} color="white"/>
                    <Text style={styles.iconName}>Notifikationer</Text>
                </View>
                <View style = {styles.home}>
                    <SimpleLineIcons name="event" size={25} color="white"/>
                    <Text style={styles.iconName}>Bokningar</Text>
                </View>
                <View style = {styles.home}>
                    <SimpleLineIcons name="home" size={25} color="white"/>                
                    <Text style={styles.iconName}>Home</Text>
                </View>
                <View style = {styles.home}>
                    <SimpleLineIcons name="map" size={25} color="white"/>
                    <Text style={styles.iconName}>Karta</Text>
                </View>
                <View style = {styles.home}>
                    <SimpleLineIcons name="settings" size={25} color="white" onPress={() => {
                        alert('You touched me');
                    }}/>
                    <Text style={styles.iconName}>Inställningar</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottom: {
        flex:1,
        justifyContent: 'flex-end',
    },
    home: {
        height: 50,
        width: 66,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconName: {
        fontSize: 9,
        marginTop: 3,
        color: 'white',
    },
    position: {
        backgroundColor: '#71002E',
        height: 60,
        width: '100%',
        position: 'absolute',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

});

export default Bottom