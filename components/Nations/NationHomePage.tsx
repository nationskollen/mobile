/**
 * Renders the home page of a nation with a header
 * and links to pages containing more information, e.g.
 * locations, menus and events.
 *
 * @category Nations
 * @module NationHomePage
 */
import React, { useEffect, useRef } from 'react'
import { Platform, ScrollView, View, Text, StyleSheet } from 'react-native'
import { useNation } from '@dsp-krabby/sdk'
import { TabStackParamList } from '../Footer'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { useTheme, RouteProp } from '@react-navigation/native'
import { useTranslation } from '../../translate/LanguageContext'

import ListButton from '../ListButton'
import NationHeader from './NationHeader'
import ActivityLevel from './ActivityLevel'
import LoadingCircle from '../LoadingCircle'
import TodaysOpeningHours from './TodaysOpeningHours'
import FocusAwareStatusBar from '../FocusAwareStatusBar'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationHome'>
}

const NationHomePage = ({ route }: Props) => {
    const { oid } = route.params
    const { colors } = useTheme()
    const { translate } = useTranslation()
    const { data: nation, isValidating, mutate } = useNation(oid)
    const navigation = useNavigation()
    const currentDate = useRef(new Date()).current

    useEffect(() => {
        if (nation?.default_location) {
            navigation.setOptions({
                headerRight: () => <ActivityLevel location={nation.default_location} />,
            })
        }
    }, [nation?.default_location])

    if (!nation) {
        return null
    }

    return (
        <ScrollView
            refreshControl={
                <LoadingCircle
                    validating={isValidating}
                    mutate={mutate}
                    accent={nation.accent_color}
                    tint="white"
                    offsetTop={10}
                />
            }
            style={{ flex: 1, backgroundColor: nation.accent_color }}
            contentContainerStyle={{ backgroundColor: colors.background, flex: Platform.OS === 'ios' ? 1 : 0 }}
            stickyHeaderIndices={[0]}
        >
            <View style={{ width: '100%', height: 70, backgroundColor: nation.accent_color, position: 'absolute' }} />
            <FocusAwareStatusBar backgroundColor={nation.accent_color} />
            <NationHeader nation={nation} />
            <TodaysOpeningHours date={currentDate} location={nation.default_location} />
            <Text style={[styles.description, { color: colors.text }]}>{nation.description}</Text>
            <View style={[styles.actions, { borderTopColor: colors.border }]}>
                <ListButton
                    title={translate.titles.nationLocationAndHours}
                    leftIcon={<Ionicons name="time-outline" size={24} color={colors.text} />}
                    onPress={() => navigation.navigate('NationLocationsAndHours', { nation })}
                />
                <ListButton
                    title={translate.titles.events}
                    onPress={() => navigation.navigate('NationEvents', { nation })}
                    leftIcon={<Ionicons name="calendar-outline" size={24} color={colors.text} />}
                />
                <ListButton
                    title={translate.titles.nationMenus}
                    onPress={() => navigation.navigate('NationMenus', { nation })}
                    leftIcon={
                        <Ionicons name="md-fast-food-outline" size={24} color={colors.text} />
                    }
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
