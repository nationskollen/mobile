// This is for rendering the header. 

import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import App from '../../App';
import * as Icons from "react-native-heroicons";
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { BellIcon } from '@heroicons/react/solid';
import { SvgCssUri} from 'react-native-svg';
import ArrowLeft from '../../img/svg/common/ArrowLeft';


const Header = () => {
    return (
    <View style ={styles.header}>
      <View style = {styles.headerContent}>
      <Image source = {require('../../img/svg/common/arrow.png')} style = {styles.leftArrow}></Image>
      <Text style ={styles.text}>Notifikationer</Text>
      <TouchableOpacity style = {styles.notButton} >
          <Text style = {{color : "white", fontFamily : "Arial", fontWeight : "bold", textAlign : "center", paddingTop : 4}}>10 nya</Text>
      </TouchableOpacity>
      </View>
    </View>   
    );
};



const styles = StyleSheet.create({
 
    header : {
    alignSelf: "stretch", // 100% width
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1
  },
  
  // Notifications text
  text : {
    alignSelf : 'flex-end',
    textAlign : "right",
    fontWeight: "bold",
    textAlign: "right",
    fontSize : 25,
    fontFamily:  "Arial",
    marginLeft : 10
  },

  // Content inside header
  headerContent : {
      flexDirection : "row",
      paddingTop: 0
  },

  // Back arrow
  leftArrow : {
      marginLeft : 10,
      marginTop : 6,
      width : 30,
      height : 25
  },

  // Notifications button
  notButton : {
    backgroundColor : "#71002E", 
    borderWidth : 1,
    borderRadius : 12,
    textAlign : "center",
    alignSelf : "flex-end",
    height : 32,
    width : 65,
    marginLeft : "auto",
    marginRight : 15,
  },

});

export default Header;
