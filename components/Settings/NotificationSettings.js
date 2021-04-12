/// This component is used to render notification settings
import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

import { useDarkMode } from "../ThemeContexts";
import { useTheme } from "@react-navigation/native";

function NotificationSettings() {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>NotificationSettings</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default NotificationSettings;
