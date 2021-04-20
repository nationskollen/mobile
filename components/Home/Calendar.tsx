import {
    View,
    StyleSheet,
} from 'react-native'
import React from "react";
import "react-native-gesture-handler";
import NativeCalendar from "react-native-calendar"
import { useDatePicker } from './DatePickerContext'

const dayShortNames = ["Sön","Mån","Tis", "Ons", "Tor", "Fre", "Lör"]
const monthNames=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"]

const Calendar: React.FC = () => {
    const { visible, date, setDate } = useDatePicker()

    // Skip rendering
    if (!visible) {
        return null
    }

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
                onDateSelect={(newDate: string) => setDate(new Date(newDate))}
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
