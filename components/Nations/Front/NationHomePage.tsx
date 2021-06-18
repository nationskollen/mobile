/**
 * Renders the home page of a nation with a header
 * and links to pages containing more information, e.g.
 * locations, menus and events.
 *
 * @category Nations
 * @module NationHomePage
 */
import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { RouteProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { TabStackParamList } from '../../Footer/Footer'
import { useNation, useIndividuals } from '@nationskollen/sdk'
import { useTranslation } from '../../../translate/LanguageContext'

import Title from '../../Common/Title'
import ListButton from '../../List/ListButton'
import NationHeader from './NationHeader'
import ActivityLevel from './ActivityLevel'
import CardCarousel from '../../Common/CardCarousel'
import ParallaxHeader from '../../Header/ParallaxHeader'
import ContentSection from '../../Common/ContentSection'
import TodaysOpeningHours from '../Hours/TodaysOpeningHours'
import ContactInformation from '../../Common/ContactInformation'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationHome'>
}

const NationHomePage = ({ route }: Props) => {
    const { oid } = route.params
    const navigation = useNavigation()
    const { translate } = useTranslation()
    const { colors } = useTheme()
    const currentDate = useRef(new Date()).current
    const { data: nation, isValidating, mutate } = useNation(oid)
    const {
        data: individuals,
        isValidating: isValidatingIndividuals,
        mutate: mutateIndividuals,
    } = useIndividuals(oid)

    // Update the activity level subscription dynamically based on the
    // selected nation.
    useEffect(() => {
        if (nation?.default_location) {
            navigation.setOptions({
                headerRight: () => <ActivityLevel location={nation.default_location} />,
            })
        }
    }, [nation?.default_location])

    // TODO: Should we render a loader here?
    if (!nation) {
        return null
    }

    return (
        <ParallaxHeader
            height={295}
            accent={nation.accent_color}
            isValidating={isValidating}
            mutate={() => {
                mutate()
                mutateIndividuals()
            }}
            title={nation.short_name}
            src={nation.cover_img_src}
            iconSrc={nation.icon_img_src}
            renderForeground={() => <NationHeader nation={nation} />}
        >
            <TodaysOpeningHours
                date={currentDate}
                location={nation.default_location}
                isValidating={isValidating}
            />
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
            <ContentSection>
                <Title size="large" label={translate.nation.description} />
                <Text style={{ color: colors.text }}>{nation.description}</Text>
            </ContentSection>
            <ContentSection>
                <Title size="large" label={translate.nation.contactInformation} />
                <ContactInformation
                    title="Email"
                    value={`kontakt@${nation.short_name}.se`}
                    icon="mail-outline"
                />
                <ContactInformation title="Telefon" value="070-000 00 00" icon="call-outline" />
            </ContentSection>
            <CardCarousel
                height={350}
                data={individuals}
                isValidating={isValidatingIndividuals}
                cardWidth={300}
                srcExtractor={(item) => item.profile_img_src}
                title={translate.nation.people}
                paddingBottom={100}
                renderContent={(item) => (
                    <>
                        <Title label={item.name} style={{ color: 'white' }} noMargin={true} />
                        <Text style={{ color: '#ccc' }}>{item.description}</Text>
                    </>
                )}
            />
        </ParallaxHeader>
    )
}

const styles = StyleSheet.create({
    description: {
        marginHorizontal: 15,
        fontSize: 16,
    },

    actions: {
        borderTopWidth: 1,
    },

    descriptionContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
    },
})

export default NationHomePage
