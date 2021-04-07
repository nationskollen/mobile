import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform, TextInput } from 'react-native';

import ChooseNation from './components/Nations/ChooseNation';
import NotificationsContent from './components/Notifications/NotificationContent';
import NationContent from './components/Nations/NationContent';
//import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ title:"Bob" }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title:"Uffe" }}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;