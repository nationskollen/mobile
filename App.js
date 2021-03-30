import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Header from './components/Header';
import NotificationContent from './components/NotificationContent';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <NotificationContent/>
      <NotificationContent/>
      <NotificationContent/>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white' ,
    alignItems: 'center',
    paddingTop: 25
  },
  menuChoises: {      
    width: 200,
    height: 100,
   
  }

});
