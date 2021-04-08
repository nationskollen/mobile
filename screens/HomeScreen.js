/// This is the Home Screen
/// Renders the home screen and creates a stack to navigate between the different screens in the home page

import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform, TextInput } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

/// TODO: Create a local stack
/// TODO: Import appropriate components (screens)
function HomeScreen() {
  return (
    <SafeAreaView style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}


export default HomeScreen;