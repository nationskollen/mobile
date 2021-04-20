import {
    View,
    StyleSheet,
} from 'react-native'
import React from "react";
import "react-native-gesture-handler";
import NativeCalendar from "react-native-calendar"

interface Props {
    date: Date
    setDate: React.Dispatch<React.SetStateAction<Date>>
}

const dayShortNames = ["Sön","Mån","Tis", "Ons", "Tor", "Fre", "Lör"]
const monthNames=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"]

const Calendar: React.FC<Props> = ({date, setDate}) => {
    return (
        <View>
            <NativeCalendar
                customStyle={styles}        //style
                showControls={true}          //prev, next buttons
                scrollEnabled={true}
                dayHeadings={dayShortNames}
                monthNames={monthNames}
                prevButtonText={"Föreg."} //prev button text, change if you find a better name
                nextButtonText={"Nästa"}  //next button text -//-
                onDateSelect={setDate}
                selectedDate={date}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    calendarContainer:{
        zIndex:100,
        elevation:100,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    controlButton:{
        backgroundColor:'#AEAEAE',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    }

})

export default Calendar
