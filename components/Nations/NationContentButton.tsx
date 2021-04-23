import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Props {
    title: String
    pressFunc: () => void
    leftIcon: Element
    rightIcon: Element
}

const NationContentButton: React.FC<Props> = ({ title, pressFunc, leftIcon, rightIcon }) => {
    const { colors } = useTheme()

    return (
        <TouchableWithoutFeedback onPress={pressFunc}>
            <View style={[styles.header, { borderBottomColor: colors.border }]}>
                <View style={styles.nameWrapper}>
                    <View style={styles.iconWrapper}>{leftIcon}</View>
                    <Text style={[styles.headerTitle, { color: colors.text }]}>{title}</Text>
                </View>

                {rightIcon}
            </View>
        </TouchableWithoutFeedback>
    )
}

//styles for dropdown menu
const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,

        paddingHorizontal: 15,
    },

    nameWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },

    iconWrapper: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default NationContentButton
