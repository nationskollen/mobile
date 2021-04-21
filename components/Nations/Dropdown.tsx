import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from '@expo/vector-icons'

import { AntDesign } from '@expo/vector-icons'


interface Props {
    title: string
    expandComponent: Element
    icon: Element
}

interface Events {
    oid: number
}

//renders expandable dropdown menu header
const Dropdown: React.FC<Props> = ({ title, expandComponent, icon }) => {
    const { colors } = useTheme()
    const [expand, setExpand] = useState(false)

    return (
        <View>
            <View style={[styles.header, { borderBottomColor: colors.border }]}>
                <View style={styles.nameWrapper}>
                    <View style={styles.iconWrapper}>{icon}</View>
                    <Text style={[styles.headerTitle, { color: colors.text }]}>{title}</Text>
                </View>
                <Ionicons
                    name={expand ? 'remove-circle-outline' : 'add-circle-outline'}
                    size={32}
                    color={colors.text}
                    onPress={() => setExpand(!expand)}
                />
            </View>

            {/*If menu is expanded, show expandComponent*/}
            {expand && expandComponent}
        </View>
    )
}

export const EventsButton: React.FC<Events> = ({oid}) => {
    const navigation = useNavigation()
    const { colors } = useTheme()

    return (
        <View style={[styles.header, {justifyContent: "flex-start"}]}>
            <View style={[styles.iconWrapper]}>
                <AntDesign name="calendar" size={24} color={colors.text} />
            </View>

            <Text style={[styles.headerTitle, { color: colors.text }]}>Evenemang</Text>

            <View style={{position:'absolute', right: 15}}>
                <Ionicons
                name="arrow-forward-circle-outline"
                size={32}
                color="black"
                onPress={() => navigation.navigate('Home', {oid})}
                />
            </View>
        </View>     
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

export default Dropdown
