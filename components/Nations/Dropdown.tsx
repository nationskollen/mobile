import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import NationContentButton from './NationContentButton'

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
        <View>
            <NationContentButton
                title={title}
                pressFunc={() => setExpand(!expand)}
                leftIcon={icon}
                rightIcon={
                    <Ionicons
                        name={expand ? 'remove-circle-outline' : 'add-circle-outline'}
                        size={32}
                        color={colors.text}
                        onPress={() => setExpand(!expand)}
                    />
                }
            ></NationContentButton>

            {/*If menu is expanded, show expandComponent*/}
            {expand && expandComponent}
        </View>
    )
}

export default Dropdown
