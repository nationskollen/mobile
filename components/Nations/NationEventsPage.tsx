/**
 * @category Nations
 * @module NationHoursPage
 */
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { TabStackParamList } from '../Footer'
import { useTranslation } from '../../translate/LanguageContext'

import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationEvents'>
}

const NationHoursPage = ({ route }: Props) => {
    const { nation } = route.params
    const { colors } = useTheme()
    const { translate } = useTranslation()
    const navigation = useNavigation()

    return (
        <NationBasePage nation={nation}>
            <Text>Events</Text>
        </NationBasePage>
    )
}

const styles = StyleSheet.create({
})

export default NationHoursPage
