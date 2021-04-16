import 'react-native-gesture-handler'
import Calendar from 'react-native-calendar'

import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native'

export default function RenderCalendar() {
    return (
        <View>
            <Calendar />
        </View>
    )
}
