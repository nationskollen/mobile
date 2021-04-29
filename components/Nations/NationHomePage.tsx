/**
 * @category Nations
 * @module NationHomePage
 */
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { TabStackParamList } from '../Footer'
import { useTranslation } from '../../translate/LanguageContext'

import ListButton from '../ListButton'
import NationHeader from './NationHeader'
import ActivityLevel from './ActivityLevel'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationHome'>
}

const NationHomePage = ({ route }: Props) => {
    const { nation } = route.params
    const { colors } = useTheme()
    const { translate } = useTranslation()
    const navigation = useNavigation()

    useEffect(() => {
        if (nation.default_location) {
            navigation.setOptions({
                headerRight: () => <ActivityLevel location={nation.default_location} />,
            })
        }
    }, [nation])

    return (
        <ScrollView style={{ flex: 1 }}>
            <NationHeader nation={nation} />
            <Text style={[styles.description, { color: colors.text }]}>{nation.description}</Text>
            <View style={[styles.actions, { borderTopColor: colors.border }]}>
                <ListButton
                    title={translate.titles.nationLocationAndHours}
                    leftIcon={<Ionicons name="time-outline" size={24} color={colors.text} />}
                    onPress={() => navigation.navigate('NationLocationsAndHours', { nation })}
                />
                <ListButton
                    title={translate.titles.events}
                    onPress={() =>
                        navigation.navigate('NationEvents', { nation })
                    }
                    leftIcon={<Ionicons name="calendar-outline" size={24} color={colors.text} />}
                />
                <ListButton
                    title={translate.titles.nationMenus}
                    onPress={() => navigation.navigate('NationMenus', { nation })}
                    leftIcon={<Ionicons name="md-fast-food-outline" size={24} color={colors.text} />}
                />
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

export default NationHomePage
