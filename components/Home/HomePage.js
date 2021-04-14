// This is for rendering the home page.
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import NK_LOGO from "../../assets/nationskollen_logo-do_not_change.png";
import RenderDropDownHeader from "../Nations/NationContentComponents/Dropdown";
import RenderTimeLine from './EventTimeline'
import RenderCalendar from './CalendarComponent'

//should "todays date" and "chosen date" be global in this file perhaps?

export default function HomePage() {
    return (
        <SafeAreaView style={{flex:1}}>
            <Header></Header>
            <FilterBar></FilterBar>

            {/*<RenderCalendar/>*/}

            {/*Render timeline of events*/}
            <RenderTimeLine></RenderTimeLine>
        </SafeAreaView>
    );
}

const Header = () => {
    const { colors } = useTheme();
    return (
        <View style={[headerStyles.headerWrapper,{color : colors.text}]}>
            <Text style={[headerStyles.headerTitle, {color : colors.text}]}>Nationskollen</Text>
            {/*THE PRETTIEST LOGO YOU WILL EVER SEE*/}
            <Image
                source={NK_LOGO}
                style={[
                    headerStyles.logo,
                    { backgroundColor: colors.backgroundExtra },
                ]}
            />
        </View>
    );
};

const FilterBar = () => {
    const { colors } = useTheme();
    return (
        <View
            style={[
                filterStyles.mainWrapper,
                { backgroundColor: colors.backgroundExtra },
            ]}
        >
            <ChooseDateBar></ChooseDateBar>
            <ChooseNationButton></ChooseNationButton>
        </View>
    );
};

const ChooseDateBar = () => {
    //TODO: change to dynamic date
    let date = "Idag";

    return (
        <View style={filterStyles.dateBar}>
            <TouchableOpacity onPress={() => handlePreviousDate()}>
                <View style={filterStyles.leftArrowWrapper}>
                    <AntDesign name={"left"} size={20} color="black" />
                </View>
            </TouchableOpacity>

            <View style={filterStyles.dateTextWrapper}>
                <Text style={filterStyles.dateText}>{date}</Text>
            </View>

            <TouchableOpacity onPress={() => handleNextDate()}>
                <View style={filterStyles.rightArrowWrapper}>
                    <AntDesign name={"right"} size={20} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

function handlePreviousDate() {
    console.log("left arrow pressed");
}
function handleNextDate() {
    console.log("right arrow pressed");
}

//renders button that should sho choose-nation content when pressed
const ChooseNationButton = () => {
    return (
        <TouchableOpacity onPress={() => handleNationButtonPress()}>
            <View style={filterStyles.nationButton}>
                <Text style={filterStyles.nationButtonText}>Nation</Text>
                <AntDesign name="down" size={20} color="white" />
            </View>
        </TouchableOpacity>
    );
};

function handleNationButtonPress() {
    console.log("nation button pressed - show choose nation content");
}

//utilizes event component imported from nation content
function RenderAllEvents() {
    const { colors } = useTheme();
    //temporary list of events
    var eventList = [
        {
            title: "Pannkakstorsdag",
            icon: <MaterialIcons name="event" size={24} color={colors.text} />,
        },
        {
            title: "Gratis-Covid Rave",
            icon: <MaterialIcons name="event" size={24} color={colors.text} />,
        },
        {
            title: "Lunchbuffé",
            icon: <MaterialIcons name="event" size={24} color={colors.text} />,
        },
    ];

    return (
        <View>
            {eventList.map(({ title, icon }) => (
                <View key={title}/>
            ))}
        </View>
    );
}

const headerStyles = StyleSheet.create({
    headerWrapper: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
    },

    logo: {
        marginLeft:6,
        width: "15%",
        height: "70%",
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "4%",
    },
});

const filterStyles = StyleSheet.create({
    mainWrapper: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#AEAEAE",
    },

    dateBar: {
        width: 250,
        height: 50,
        backgroundColor: "white",
        borderRadius: 10,
        marginLeft: "5%",
        borderWidth: 1,
        flexDirection: "row",
    },

    leftArrowWrapper: {
        width: 50,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
    },

    dateTextWrapper: {
        width: 150,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    dateText: {
        fontSize: 14,
        fontWeight: "bold",
    },

    rightArrowWrapper: {
        width: 50,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderLeftWidth: 1,
    },

    nationButton: {
        height: 50,
        width: 100,
        backgroundColor: "#71002E",
        marginHorizontal: "6%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    nationButtonText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "white",
        marginHorizontal: 5,
    },
});
