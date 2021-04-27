/**
 * @category Nations
 * @module NationContent
 */
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { useTranslation } from '../../translate/LanguageContext'

import Menu from './Menu'
import NationInfo from './NationInfo'
import ListButton from '../ListButton'
import ActivityLevel from '../Map/ActivityLevel'


export interface Props {
    [key: string]: any
}

const NationContent = ({ route }: Props) => {
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
    const { translate } = useTranslation ()

    return (
        <ListButton
            title={translate.nations.events}
            onPress={() => navigation.navigate('Events', { oid, hideNationFilter: true })}
            leftIcon={<Ionicons name="calendar-outline" size={24} color={colors.text} />}
        />
    )
}

export default NationContent
