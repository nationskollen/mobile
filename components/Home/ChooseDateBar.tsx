import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../ThemeContext'
import { useDatePicker } from './DatePickerContext'

const ChooseDateBar: React.FC = () => {
    const { colors } = useTheme()
    const { date, setDate, visible, setVisible } = useDatePicker()

    return (
        <View style={styles.dateBar}>
            <TouchableOpacity onPress={() => console.log('Should call setDate')}>
                <View style={styles.leftArrowWrapper}>
                    <Ionicons name='md-chevron-back' size={20} color={colors.text} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dateTextWrapper} onPress={() => setVisible(!visible)}>
                <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Should call setDate')}>
                <View style={styles.rightArrowWrapper}>
                    <Ionicons name='md-chevron-forward' size={20} color={colors.text} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dateBar: {
        width: 250,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '5%',
        borderWidth: 1,
        flexDirection: 'row',
    },

    leftArrowWrapper: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
    },

    dateTextWrapper: {
        width: 150,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    dateText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    rightArrowWrapper: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
    },
})

export default ChooseDateBar
