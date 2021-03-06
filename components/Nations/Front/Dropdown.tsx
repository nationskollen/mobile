/**
 * This component renders an expandable dropdown menu header
 * @category Nation
 * @module Dropdown
 * @param title The title of the dropdown menu header
 * @param expandComponent The component to be rendered when pressing an expand button on the header
 * @param icon The button that when pressed renders `expandComponent`
 */
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export interface Props {
    title: string
    expandComponent: Element
    icon: Element
}

//renders expandable dropdown menu header
const Dropdown = ({ title, expandComponent, icon }: Props) => {
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

//styles for dropdown menu
const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
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
