
/// This component is used to get the bottom

import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, FlexStyle} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Bottom = () => {
    return (
        <View style = {{
            backgroundColor: '#71002E',
            height: 60,
            width: '100%',
            position: 'absolute',
            bottom: 0,
        }}>
            <View/>
            <View/>
            <View/>
            <View/>
            <View/>
        </View>
    );
};

const styles = StyleSheet.create({
    position: {
        backgroundColor: '#71002E',
        height: 75,
        //alignSelf: 'flex-end',
    },
    home: {
        
    }

});

export default Bottom