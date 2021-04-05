import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import ChooseNation from './components/Nations/ChooseNation';
import NotificationsContent from './components/Notifications/NotificationContent';
import NationContent from './components/Nations/NationContent';
import Bottom from './components/Bottom';

class Notification { constructor(nation, title, text, publishTime, eventTime) {
  this.nation = nation;
  this.title = title;
  this.text = text;
  this.publishTime = publishTime;
  this.eventTime = eventTime;
  //add this.logo ?
}}

var nationListEx = {
  "norrlands": {
    name: 'Norrlands Nation',
    nickname: 'Norrlands Nation',
    logo: '../../img/png/norrlands/norrlandslogo.png',
  },
  "vdala":{
    name: 'Västmanlands-Dala Nation',
    nickname: 'V-Dala Nation',
    logo: '../../img/png/vdala/vdalalogga.png',
  },
  "gotlands":{
    name: 'Gotlands Nation',
    nickname: 'Gotlands Nation',
    logo: '../../img/png/vdala/vdalalogga.png',
  },
  "snerikes":{
    name: 'Södermanlands-Nerikes Nation',
    nickname: 'Snerikes Nation',
    logo: '../../img/png/vdala/vdalalogga.png',
  },
};

export default function App() {
  console.log("app reloaded")
  //example notifications
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

      {/*//Page for choosing nation from list of all nations
      <ChooseNation nationList={nationListEx}/>*/}
      <NationContent nation={nationListEx.vdala}></NationContent>

      {/*<Bottom/>*/}
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
