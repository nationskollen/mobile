import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import ChooseNation from './components/Nations/ChooseNation';
import NotificationsContent from './components/Notifications/NotificationContent';
import NationContent from './components/Nations/NationContent';
import Footer from './components/Footer';
import SettingsScreen from './screens/SettingsScreen'
import HomePage from './components/Home/HomePage.js'

class Notification { constructor(nation, title, text, publishTime, eventTime) {
  this.nation = nation;
  this.title = title;
  this.text = text;
  this.publishTime = publishTime;
  this.eventTime = eventTime;
}}

export var  nationListEx = {
  "norrlands": {
    id: "norrlands",
    name: 'Norrlands Nation',
    nickname: 'Norrlands Nation',
    logo: require('./img/png/norrlands/norrlandslogga.png'),
  },
  "vdala": {
    id: "vdala",
    name: 'Västmanlands-Dala Nation',
    nickname: 'V-Dala Nation',
    logo: require('./img/png/vdala/vdalalogga.png'),
  },
  "gotlands":{
    id: "gotlands", 
    name: 'Gotlands Nation',
    nickname: 'Gotlands Nation',
    logo: require('./img/png/gotlands/gotlandslogga.png'),
  },
  "snerikes":{
    id: "snerikes", 
    name: 'Södermanlands-Nerikes Nation',
    nickname: 'Snerikes Nation',
    logo: require('./img/png/snerikes/snerikeslogga.png'),
  },

  "kalmars" : {
    id: "kalmars", 
    name : 'Kalmars Nation',
    nickname: 'Snerikes Nation',
    logo: require('./img/png/kalmars/kalmarslogga.png'),
  },

  "ostgotas" : {
    id: "ostgotas",
    name : 'Östgöta Nation',
    nickname: 'ÖG-Nations',
    logo: require('./img/png/ostgotas/ostgotalogga.png'),
  },

  "smalands" : {
    id: "smalands",
    name: 'Smålands Nation',
    nickname: 'Smålands Nation',
    logo: require('./img/png/smalands/smalandslogga.png')
  },

  "stockholms" : {
    id: "stockholms",
    name: 'Stockholms Nation',
    nickname: 'Stocken',
    logo: require('./img/png/stockholms/stockholmslogga.png')
  },

  "uplands" : {
    id: "uplands",
    name: 'Uplands Nation',
    nickname: 'Uplands Nation',
    logo: require('./img/png/uplands/uplandslogga.png'),
  },
  
  "varmlands" : {
    id: "varmlands",
    name: 'Värmlands Nation',
    nickname : 'Värmlands Nation',
    logo: require('./img/png/varmlands/varmlandslogga.png'),
  },
  
  "vastgotas" : {
    id: "vastgotas",
    name: 'Västgötas Nation',
    nickname: 'Västgötas Nation',
    logo: require('./img/png/vastgotas/vastgotalogga.png'),
  },

  "goteborgs" : {
    id: "goteborgs",
    name: 'Göteborgs Nation',
    nickname: 'Göteborgs Nation',
    logo: require('./img/png/goteborgs/goteborglogga.png'),
  },

  "ghs" : {
    id: "ghs",
    name: 'Gästrike-Hälsinglands Nation',
    nickname: 'GH',
    logo: require('./img/png/ghs/ghlogga.png'),
    },
  };

export default function App() {
  console.log("app reloaded")
  //example notifications)
  const notification1 = new Notification('V-Dala nation', '04-Släpp Lördag!', 'Välkomna till årets första 04-släpp sen pandemins början!', '2021-03-31 13:37', '2021-04-02 22:00-04:00');
  const notification2 = new Notification('Norrlands nation', 'Våffeldagen', 'Käka krispiga våfflor för 10 kr styck', '2021-03-31 04:20', '2021-04-01 10:00-15:00');
  const notification3 = new Notification('Gotlands Nation', 'Gofika!', 'Sike fikat är inte gott alls, kom inte hit', '2021-03-31 15:53', '2021-05-10 09:00-16:00');
  const notification4 = new Notification('Gotlands Nation', 'Gofika!', 'Sike fikat är inte gott alls, kom inte hit', '2021-03-31 15:53', '2021-05-10 09:00-16:00');
  const notification5 = new Notification('Gotlands Nation', 'Gofika!', 'Sike fikat är inte gott alls, kom inte hit', '2021-03-31 15:53', '2021-05-10 09:00-16:00');
  const notification6 = new Notification('Gotlands Nation', 'Gofika!', 'Sike fikat är inte gott alls, kom inte hit', '2021-03-31 15:53', '2021-05-10 09:00-16:00');

  //can be replaced with get-function
  //notifications should be sorted by published (t)
  const sortedNotifications = [notification2, notification1, notification3, notification4, notification5, notification6]

  return (
    <SafeAreaView style = {styles.container}>
      {/*Page with notifications
      <NotificationsContent notificationList={sortedNotifications}/>*/}

      {/*Page for choosing nation from list of all nations
      <ChooseNation nationList={nationListEx}/>*/}
      
      {/*Page with information about a nation*/}
      <NationContent nation={nationListEx['vdala']}></NationContent>

      {/*Home Page
      <HomePage/>*/}
      
      {/*Footer used on all screens*/}
      <Footer/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white' ,
    alignContent: 'center',

    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 40,
  },
  menuChoices: {      
    width: 200,
    height: 100,
  }

});
