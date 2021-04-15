import "react-native-gesture-handler";
import Calendar from "react-native-calendar"
import React from "react";
import RenderTimeline from './EventTimeline'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";

export default function RenderCalendar(){
    let dayShortNames = ["Sön","Mån","Tis", "Ons", "Tor", "Fre", "Lör"]
    let monthNames=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"]

    return (
        <View>
            <Calendar
                customStyle={styles}        //style
                showControls={true}          //prev, next buttons
                dayHeadings={dayShortNames}
                monthNames={monthNames}
                prevButtonText={"Föreg."} //prev button text, change if you find a better name
                nextButtonText={"Nästa"}  //next button text -//-


            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    calendarContainer:{
        zIndex:100,
        elevation:100,
    },

    controlButton:{
        backgroundColor:'#AEAEAE',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    }

})