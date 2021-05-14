import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Event } from '@nationskollen/sdk'
import { AntDesign } from '@expo/vector-icons'
import ReactContentLoaderInstagram from 'react-content-loader/native/native/presets/InstagramStyle'

interface Props {
    event: Event
}

const EventTime = ({event}:Props) => {
    const { colors } = useTheme()

    const eventArr = event.occurs_at.split('T')
    const dateArr = eventArr[0].split('-')
    const dateMonth = dateArr[1][0] == '0' ? dateArr[1][1] : dateArr[1]
    const dateStr = dateArr[2] + "/" + dateMonth

    const smallSpace = <Text style={{fontSize: 8}}>{" "}</Text>
    const startTime = eventArr[1].slice(0,5)
    const endTime = event.ends_at.slice(11,16)

    return (
        <View style={styles.container}>
            {/* Time */}
            <AntDesign name="clockcircleo" size={16} color={colors.text} style={{paddingRight: 5}}/>
            <Text style={[styles.time, { color: colors.text }]}>{startTime}</Text>
                {smallSpace}
                <Text style={{color: colors.text}}>{"-"}</Text>
                {smallSpace}
            <Text style={[styles.time, { color: colors.text }]}>{endTime}</Text>

            {/* Date */}
            <AntDesign name="calendar" size={18} color={colors.text} style={{marginLeft:12, paddingRight:5}}/>
            <Text style={[styles.time, { color: colors.text }]}>{dateStr}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        paddingBottom: 6
    },
    
    time : {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default EventTime