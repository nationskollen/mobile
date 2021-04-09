/// This is the home for nations
/// Renders start page for nations

import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform, TextInput } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


/// Pages to move to and from
import ChooseNation from '../components/Nations/ChooseNation';
import NationContent from '../components/Nations/NationContent';

/// Creates a local navigation stack for this tab
const Stack = createStackNavigator();

/// The screens included in the local stack
/// Put screens relating to nations here
function NationScreen({ navigation }) {
  
  return (
    <Stack.Navigator initialRouteName="ChooseNation" screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="ChooseNation"
        >
            {props => <ChooseNation {...props} nationList={nationListEx}/>}

        </Stack.Screen>
        <Stack.Screen
            name="NationContent"
        >
            {props => <NationContent {...props}/>}
        </Stack.Screen>
    </Stack.Navigator>
      
  );
}

export var nationListEx = {
  "norrlands": {
    id: "norrlands",
    name: 'Norrlands Nation',
    nickname: 'Norrlands Nation',
    logo: require('../img/png/norrlands/norrlandslogga.png'),
  },
  "vdala": {
    id: "vdala",
    name: 'Västmanlands-Dala Nation',
    nickname: 'V-Dala Nation',
    logo: require('../img/png/vdala/vdalalogga.png'),
  },
  "gotlands":{
    id: "gotlands", 
    name: 'Gotlands Nation',
    nickname: 'Gotlands Nation',
    logo: require('../img/png/gotlands/gotlandslogga.png'),
  },
  "snerikes":{
    id: "snerikes", 
    name: 'Södermanlands-Nerikes Nation',
    nickname: 'Snerikes Nation',
    logo: require('../img/png/snerikes/snerikeslogga.png'),
  },

  "kalmars" : {
    id: "kalmars", 
    name : 'Kalmars Nation',
    nickname: 'Snerikes Nation',
    logo: require('../img/png/kalmars/kalmarslogga.png'),
  },

  "ostgotas" : {
    id: "ostgotas",
    name : 'Östgöta Nation',
    nickname: 'ÖG-Nations',
    logo: require('../img/png/ostgotas/ostgotalogga.png'),
  },

  "smalands" : {
    id: "smalands",
    name: 'Smålands Nation',
    nickname: 'Smålands Nation',
    logo: require('../img/png/smalands/smalandslogga.png')
  },

  "stockholms" : {
    id: "stockholms",
    name: 'Stockholms Nation',
    nickname: 'Stocken',
    logo: require('../img/png/stockholms/stockholmslogga.png')
  },

  "uplands" : {
    id: "uplands",
    name: 'Uplands Nation',
    nickname: 'Uplands Nation',
    logo: require('../img/png/uplands/uplandslogga.png'),
  },
  
  "varmlands" : {
    id: "varmlands",
    name: 'Värmlands Nation',
    nickname : 'Värmlands Nation',
    logo: require('../img/png/varmlands/varmlandslogga.png'),
  },
  
  "vastgotas" : {
    id: "vastgotas",
    name: 'Västgötas Nation',
    nickname: 'Västgötas Nation',
    logo: require('../img/png/vastgotas/vastgotalogga.png'),
  },

  "goteborgs" : {
    id: "goteborgs",
    name: 'Göteborgs Nation',
    nickname: 'Göteborgs Nation',
    logo: require('../img/png/goteborgs/goteborglogga.png'),
  },

  "ghs" : {
    id: "ghs",
    name: 'Gästrike-Hälsinglands Nation',
    nickname: 'GH',
    logo: require('../img/png/ghs/ghlogga.png'),
    },
  };

export default NationScreen;