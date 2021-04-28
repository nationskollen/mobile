/**
 * @category Nations
 * @module NationContent
 */
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { TabStackParamList } from '../Footer'
import { useTranslation } from '../../translate/LanguageContext'

import Menu from './Menu'
import ListButton from '../ListButton'
import NationHeader from './NationHeader'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationContent'>
}

const NationContent = ({ route }: Props) => {
    const { nation } = route.params
    const { colors } = useTheme()
    const { translate } = useTranslation()
    const navigation = useNavigation()

    return (
        <ScrollView style={{ flex: 1 }}>
            <NationHeader nation={nation} />
            <Text style={[styles.description, { color: colors.text }]}>{nation.description}</Text>
            <View style={[styles.actions, { borderTopColor: colors.border }]}>
                <ListButton
                    title={translate.nations.openingHours}
                    leftIcon={<Ionicons name="time-outline" size={24} color={colors.text} />}
                    onPress={() => console.log('hello')}
                />
                <ListButton
                    title={translate.nations.locations}
                    leftIcon={<Ionicons name="location-outline" size={24} color={colors.text} />}
                    onPress={() => console.log('hello')}
                />
                <ListButton
                    title={translate.nations.events}
                    onPress={() =>
                        navigation.navigate('Events', { oid: nation.oid, hideNationFilter: true })
                    }
                    leftIcon={<Ionicons name="calendar-outline" size={24} color={colors.text} />}
                />
                <Menu oid={nation.oid} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    description: {
        marginHorizontal: 15,
        fontSize: 16,
    },

    actions: {
        borderTopWidth: 1,
        marginTop: 20,
    },
})

export default NationContent
