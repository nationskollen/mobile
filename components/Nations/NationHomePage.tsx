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
import ParallaxScrollView from 'react-native-parallax-scroll-view'

import Title from '../Title'
import CoverImage from '../CoverImage'
import ListButton from '../ListButton'
import NationHeader from './NationHeader'
import ActivityLevel from './ActivityLevel'
import LoadingCircle from '../LoadingCircle'
import TodaysOpeningHours from './TodaysOpeningHours'
import FocusAwareStatusBar from '../FocusAwareStatusBar'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationHome'>
}

// TODO: These values should probably be set dynamically?
const STICKY_HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 82

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
        <ParallaxScrollView
            fadeOutForeground={false}
            backgroundScrollSpeed={1}
            parallaxHeaderHeight={295}
            style={{ marginBottom: -48 }}
            backgroundColor={nation.accent_color}
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            contentBackgroundColor={colors.background}
            renderForeground={() => <NationHeader nation={nation} />}
            renderBackground={() => (
                <CoverImage
                    src={nation.cover_img_src}
                    height={295}
                    hideFallbackIcon={true}
                    backgroundColor={nation.accent_color}
                    overlayColor={nation.accent_color}
                />
            )}
            renderStickyHeader={() => (
                <View style={styles.stickyHeaderContainer}>
                    <Text style={styles.stickyHeaderTitle}>{nation.short_name}</Text>
                </View>
            )}
            refreshControl={
                <LoadingCircle
                    validating={isValidating}
                    mutate={mutate}
                    accent={nation.accent_color}
                    tint="white"
                    offsetTop={10}
                />
            }
        >
            <FocusAwareStatusBar backgroundColor={nation.accent_color} />
            <TodaysOpeningHours date={currentDate} location={nation.default_location} />
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
            <View style={styles.descriptionContainer}>
                <Title size="medium" label={translate.nation.description} />
                <Text style={{ color: colors.text }}>{nation.description}</Text>
            </View>
        </ParallaxScrollView>
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

    stickyHeaderContainer: {
        marginTop: 10,
        paddingLeft: 60,
        width: '100%',
        height: STICKY_HEADER_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
    },

    stickyHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },

    descriptionContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
    },
})

export default NationHomePage
