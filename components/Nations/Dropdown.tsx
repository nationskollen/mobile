import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

interface Props {
    title: string
    expandComponent: Element
    icon: Element
}

//renders expandable dropdown menu header
const Dropdown: React.FC<Props> = ({ title, expandComponent, icon }) => {
    const { colors } = useTheme()
    const [expand, setExpand] = useState(false)

    return (
        <View key={title}>
            <View style={styles.header}>
                <View style={styles.iconWrapper}>{icon}</View>
                <Text style={[styles.headerTitle, { color: colors.text }]}>{title}</Text>
                <View style={styles.headerPlusWrapper}>
                    <Ionicons
                        name={expand ? 'remove-circle-outline' : 'add-circle-outline'}
                        size={32}
                        color="#AEAEAE"
                        onPress={() => setExpand(!expand)}
                    />
                </View>
            </View>

            {/*If menu is expanded, show expandComponent*/}
            {expand && expandComponent}
        </View>
    )
}

//styles for dropdown menu
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        alignItems: 'center',
    },

    iconWrapper: {
        marginLeft: 20,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: 60,
    },

    headerPlusWrapper: {
        position: 'absolute',
        right: 30,
    },
})

export default Dropdown
