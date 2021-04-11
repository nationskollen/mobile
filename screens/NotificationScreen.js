import React from "react";

import "react-native-gesture-handler";
import { HeaderOptions } from "./NavigationHeader";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotificationsContent from "../components/Notifications/NotificationContent";

/// Creates a local navigation stack for this tab
const Stack = createStackNavigator();

/// The screens included in the local stack
/// Put screens relating to notifications here
function NotificationScreen({ navigation }) {
    const { colors } = useTheme();

    return (
        <Stack.Navigator screenOptions={HeaderOptions(colors)}>
            <Stack.Screen
                name="Notifications"
                options={{ title: "Notifikationer" }}
            >
                {(props) => (
                    <NotificationsContent
                        {...props}
                        notificationList={sortedNotifications}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

/// Examples
/// TODO: get from db
class Notification {
    constructor(nation, title, text, publishTime, eventTime) {
        this.nation = nation;
        this.title = title;
        this.text = text;
        this.publishTime = publishTime;
        this.eventTime = eventTime;
    }
}

const notification1 = new Notification(
    "V-Dala nation",
    "04-Släpp Lördag!",
    "Välkomna till årets första 04-släpp sen pandemins början!",
    "2021-03-31 13:37",
    "2021-04-02 22:00-04:00"
);
const notification2 = new Notification(
    "Norrlands nation",
    "Våffeldagen",
    "Käka krispiga våfflor för 10 kr styck",
    "2021-03-31 04:20",
    "2021-04-01 10:00-15:00"
);
const notification3 = new Notification(
    "Gotlands Nation",
    "Gofika!",
    "Sike fikat är inte gott alls, kom inte hit",
    "2021-03-31 15:53",
    "2021-05-10 09:00-16:00"
);
const notification4 = new Notification(
    "Gotlands Nation",
    "Gofika!",
    "Sike fikat är inte gott alls, kom inte hit",
    "2021-03-31 15:53",
    "2021-05-10 09:00-16:00"
);
const notification5 = new Notification(
    "Gotlands Nation",
    "Gofika!",
    "Sike fikat är inte gott alls, kom inte hit",
    "2021-03-31 15:53",
    "2021-05-10 09:00-16:00"
);
const notification6 = new Notification(
    "Gotlands Nation",
    "Gofika!",
    "Sike fikat är inte gott alls, kom inte hit",
    "2021-03-31 15:53",
    "2021-05-10 09:00-16:00"
);

//can be replaced with get-function
//notifications should be sorted by published (t)
const sortedNotifications = [
    notification2,
    notification1,
    notification3,
    notification4,
    notification5,
    notification6,
];

export default NotificationScreen;
