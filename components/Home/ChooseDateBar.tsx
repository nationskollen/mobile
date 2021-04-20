import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native'

import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../ThemeContext'

interface Props {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const ChooseDateBar: React.FC<Props> = ({state, setState}) => {
    const { colors } = useTheme()

    //TODO: Update dynamically using new Date() etc
    const [currentDate, setCurrentDate] = useState('Idag')

    return (
        <View style={styles.dateBar}>
            <TouchableOpacity onPress={() => setCurrentDate('Igår')}>
                <View style={styles.leftArrowWrapper}>
                    <Ionicons name='md-chevron-back' size={20} color={colors.text} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dateTextWrapper} onPress={()=>setState(!state)}>
                <Text style={styles.dateText}>{currentDate}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCurrentDate('Imorgon')}>
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
