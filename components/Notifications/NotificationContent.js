// This component is used for rendering each notification.

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";

function NotificationsContent({ notificationList }) {
    return (
        <ScrollView>
            {notificationList.map((notificationX, index) => (
                <RenderNotification
                    key={index}
                    notification={notificationX}
                />
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

    return (
        <View style={styles.notificationWrapper}>
            <View style={styles.nationLogo}>
                <View style={styles.nationLogoImgWrapper}>
                    <Image
                        source={require("../../img/png/vdala/vdalalogga.png")}
                        style={styles.nationLogoImg}
                    ></Image>
                </View>
            </View>
            <View style={styles.rectangle}></View>
            <View style={styles.notificationContent}>
                <Text style={styles.publishTime}>{publishTime}</Text>
                <Text style={styles.nationName}>{nation}</Text>
                <Text style={styles.notificationHeader}>{title}</Text>
                <Text style={styles.content}>{text}</Text>
                <Text style={styles.eventTime}>{eventTime}</Text>
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
        borderColor: "#E0E0E0",
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
        backgroundColor: "#E8E8E8",
        width: 50,
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
        marginLeft: "9%",
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
        fontSize: 14,
        width: "45%",
        height: "20%",

        //backgroundColor: 'lightgrey',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "lightgrey",

        marginTop: 10,
    },

    content: {
        overflow: "hidden",
    },
});

export default NotificationsContent;
