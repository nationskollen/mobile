/// This component is used create the footer

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  FlexStyle,
  TouchableHighlight,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/// Screens
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import NationScreen from "../screens/NationScreen";
import BookingsScreen from "../screens/BookingsScreen";

/// Icons
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

/// Creates a tab where each "main screen" can be accessed
const Tab = createBottomTabNavigator();

/// The footer with each main screen
function Footer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: "#71002E",
        inactiveBackgroundColor: "#71002E",
        activeTintColor: "white",
        inactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="bell" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="event" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Nations"
        component={NationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="map" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Footer;
