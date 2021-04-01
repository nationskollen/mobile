// This is for rendering the header. 

import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import App from '../App';
import * as Icons from "react-native-heroicons";
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { BellIcon } from '@heroicons/react/solid';
import { SvgCssUri} from 'react-native-svg';
import ArrowLeft from '../img/svg/common/ArrowLeft';


const Header = () => {
    return (
    <View style = {styles.menu}>
        <View style = {styles.menuIcons}>

        </View>
        <View style = {styles.menuIconsText}>

        </View>
    </View> 
    );
};



const styles = StyleSheet.create({
 
    
});

export default BottomMenu;

