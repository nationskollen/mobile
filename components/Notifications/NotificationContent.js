// This component is used for rendering each notification.

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useDarkMode } from "../ThemeContexts";
import { useTheme } from "@react-navigation/native";

function NotificationsContent({ notificationList }) {
    return (
        <ScrollView>
            {notificationList.map((notificationX, index) => (
                <RenderNotification key={index} notification={notificationX} />
            ))}
        </ScrollView>
    );
}

function RenderNotification({ notification }) {
    let nation = notification.nation;
    let title = notification.title;
    let text = notification.text;

    //TODO: replace publishTime with calculated "x minutes/hours/days ago"
    let publishTime = notification.publishTime;
    //TODO: replace date in eventTime with "Today" or just "MM/DD"
    let eventTime = notification.eventTime;
    const { setDarkMode, isDarkMode } = useDarkMode();
    const { colors } = useTheme();

    return (
        <View
            style={[
                styles.notificationWrapper,
                {
                    backgroundColor: colors.notificationBackground,
                    borderColor: colors.notificationBorder,
                },
            ]}
        >
            <View style={styles.nationLogo}>
                <View
                    style={[
                        styles.nationLogoImgWrapper,
                        { backgroundColor: colors.notificationImg },
                    ]}
                >
                    <Image
                        source={require("../../img/png/vdala/vdalalogga.png")}
                        style={styles.nationLogoImg}
                    ></Image>
                </View>
            </View>
            <View
                style={[
                    styles.rectangle,
                    { backgroundColor: colors.notificationRectangle },
                ]}
            ></View>
            <View
                style={[
                    styles.notificationContent,
                    { backgroundColor: colors.notificationBackground },
                ]}
            >
                <Text style={[styles.publishTime, { color: colors.text }]}>
                    {publishTime}
                </Text>
                <Text style={[styles.nationName, { color: colors.text }]}>
                    {nation}
                </Text>
                <Text
                    style={[styles.notificationHeader, { color: colors.text }]}
                >
                    {title}
                </Text>
                <Text style={[styles.content, { color: colors.text }]}>
                    {text}
                </Text>
                <Text
                    style={[
                        styles.eventTime,
                        {
                            color: colors.text,
                            borderColor: colors.notificationBorder,
                        },
                    ]}
                >
                    <Text style={styles.eventText}>{eventTime}</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    notificationWrapper: {
        flexWrap: "wrap",
        alignSelf: "stretch",
        backgroundColor: "white",
        height: 150,
        marginTop: 15,
        borderBottomWidth: 1,
    },

    nationLogoImg: {
        marginLeft: "auto",
        marginRight: "auto",
        height: 30,
        width: 45,
    },

    nationLogoImgWrapper: {
        marginLeft: 15,
        justifyContent: "center",
        width: 50,

        backgroundColor: "#E8E8E8",
        height: 50,
        borderRadius: 50,
    },

    notificationContent: {
        paddingTop: 5,
        paddingLeft: 20,
        backgroundColor: "white",
        width: 400,
        height: 140,
        paddingBottom: 15,
    },

    rectangle: {
        height: "50%",
        width: 5,
        marginLeft: "10.2%",
        marginTop: "1%",
        backgroundColor: "#E8E8E8",
    },

    notificationHeader: {
        fontSize: 20,
        fontWeight: "bold",
    },
    nationName: {
        fontWeight: "bold",
        color: "#71002E",
    },
    publishTime: {
        fontSize: 14,
    },

    eventTime: {
        fontSize: 16,
        width: "45%",
        height: "20%",
        //backgroundColor: 'lightgrey',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 10,
    },

    eventText: {},

    content: {
        overflow: "hidden",
    },
});

export default NotificationsContent;
