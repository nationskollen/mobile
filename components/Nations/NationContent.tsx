import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'

import Menu from './Menu'
import NationInfo from './NationInfo'
import ListButton from '../ListButton'
import ActivityLevel from '../Map/ActivityLevel'

// TODO: Add correct type here
interface Props {
    route: any
}

const NationContent: React.FC<Props> = ({ route }) => {
    // TODO: Pass in oid instead?
    const { nation } = route.params

    return (
        <View style={{ flex: 1 }}>
            <NationInfo nation={nation} />
            <ActivityLevel />
            <ScrollView style={{ flex: 1 }}>
                <Menu oid={nation.oid} />
                <EventButton oid={nation.oid} />
            </ScrollView>
        </View>
    )
}

const EventButton = ({ oid }) => {
    const navigation = useNavigation()
    const { colors } = useTheme()

    return (
        <ListButton
            title={'Evenemang'}
            onPress={() => navigation.navigate('Home', { oid: oid, hideNationFilter: true })}
            leftIcon={<Ionicons name='calendar-outline' size={24} color={colors.text} />}
        />
    )
}

export default NationContent
