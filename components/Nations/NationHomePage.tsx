/**
 * Renders the home page of a nation with a header
 * and links to pages containing more information, e.g.
 * locations, menus and events.
 *
 * @category Nations
 * @module NationHomePage
 */
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Animated, Platform, View, Text, StyleSheet, StatusBar } from 'react-native'
import { useNation } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { useHeaderHeight } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { useTranslation } from '../../translate/LanguageContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ParallaxScrollView from 'react-native-parallax-scroll-view'

import Title from '../Title'
import NationLogo from './NationLogo'
import CoverImage from '../CoverImage'
import ListButton from '../ListButton'
import NationHeader from './NationHeader'
import ActivityLevel from './ActivityLevel'
import LoadingCircle from '../LoadingCircle'
import ContentSection from '../ContentSection'
import PersonCarousel from '../PersonCarousel'
import TodaysOpeningHours from './TodaysOpeningHours'
import ContactInformation from '../ContactInformation'
import FocusAwareStatusBar from '../FocusAwareStatusBar'
import NavigationBackArrow from '../NavigationBackArrow'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationHome'>
}

// TODO: Load from server
const DATA = [
    {
        name: 'Fredrik Engstrand',
        description: '1Q',
    },
    {
        name: 'Fahad Rami Jamil',
        description: '2Q',
    },
    {
        name: 'Johannes Liljedahl',
        description: 'Klubbmästare',
    },
]

// Height of the parallax header containing the nation cover image
const PARALLAX_HEADER_HEIGHT = 295

const NationHomePage = ({ route }: Props) => {
    const { oid } = route.params
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    const { translate } = useTranslation()
    const headerHeight = useHeaderHeight()
    const { colors, isDarkMode } = useTheme()
    const currentDate = useRef(new Date()).current
    const arrowColor = useRef(new Animated.Value(0)).current
    const [darkStatusBar, setDarkStatusBar] = useState(false)
    const { data: nation, isValidating, mutate } = useNation(oid)

    // To make sure that the content is scrollable to the point where the
    // header and initial page content touch. For some reason, Android had
    // additional spacing despite using the inset and status bar height. It seems
    // to be the same height for all (?) android devices, hence the platform check.
    const contentHeightModifier = -(
        headerHeight -
        insets.top -
        StatusBar.currentHeight +
        (Platform.OS === 'android' ? 16 : 0)
    )

    const updateStatusBar = useCallback((hidden: boolean) => {
        // Android will have a static bar at the top that is the
        // same color as the nation accent color. There is no need
        // change the text color here.
        if (Platform.OS === 'android' || isDarkMode) {
            return
        }

        // Use dark status bar if the sticky header is visible
        setDarkStatusBar(!hidden)
    }, [])

    // Update the activity level subscription dynamically based on the
    // selected nation.
    useEffect(() => {
        if (nation?.default_location) {
            navigation.setOptions({
                headerRight: () => <ActivityLevel location={nation.default_location} />,
            })
        }
    }, [nation?.default_location])

    // Update the navigation back arrow based on the currently selected theme.
    // If the user uses light mode, the navigation arrow must be animated
    // to a darker color when scrolling down. On dark mode, this can be skipped.
    useEffect(() => {
        if (isDarkMode) {
            navigation.setOptions({
                headerLeft: () => <NavigationBackArrow color="white" />,
            })
        } else {
            navigation.setOptions({
                headerLeft: () => (
                    <NavigationBackArrow
                        color={arrowColor.interpolate({
                            inputRange: [0, PARALLAX_HEADER_HEIGHT - headerHeight],
                            outputRange: ['white', colors.textHighlight],
                        })}
                    />
                ),
            })
        }

        if (isDarkMode) {
            setDarkStatusBar(false)
        }
    }, [isDarkMode])

    // TODO: Should we render a loader here?
    if (!nation) {
        return null
    }

    return (
        <ParallaxScrollView
            fadeOutForeground={false}
            backgroundScrollSpeed={1}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            style={{ marginBottom: contentHeightModifier }}
            backgroundColor={colors.background}
            stickyHeaderHeight={headerHeight}
            contentBackgroundColor={colors.background}
            renderForeground={() => <NationHeader nation={nation} />}
            renderBackground={() => (
                <CoverImage
                    src={nation.cover_img_src}
                    height={PARALLAX_HEADER_HEIGHT}
                    hideFallbackIcon={true}
                    backgroundColor={nation.accent_color}
                    overlayColor={nation.accent_color}
                />
            )}
            renderStickyHeader={() => (
                <View
                    style={[
                        styles.stickyHeaderContainer,
                        {
                            height: headerHeight + StatusBar.currentHeight,
                            marginTop: Platform.OS === 'ios' ? insets.top / 2 : 0,
                        },
                    ]}
                >
                    <NationLogo src={nation.icon_img_src} size={35} spacing={6} />
                    <Title
                        size="large"
                        label={nation.short_name}
                        noMargin={true}
                        style={{ marginLeft: 10 }}
                    />
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
            onChangeHeaderVisibility={updateStatusBar}
            scrollEvent={Animated.event([{ nativeEvent: { contentOffset: { y: arrowColor } } }], {
                useNativeDriver: false,
            })}
        >
            <FocusAwareStatusBar
                color={Platform.OS === 'ios' && darkStatusBar ? 'dark' : 'light'}
                backgroundColor={nation.accent_color}
            />
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
            <PersonCarousel
                height={350}
                data={DATA}
                cardWidth={300}
                title={translate.nation.people}
                paddingBottom={100}
                renderContent={(item) => (
                    <>
                        <Title label={item.name} style={{ color: 'white' }} noMargin={true} />
                        <Text style={{ color: '#ccc' }}>{item.description}</Text>
                    </>
                )}
            />
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
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 65,
    },

    stickyHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        position: 'absolute',
        bottom: 15,
        left: 60,
    },

    descriptionContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
    },
})

export default NationHomePage
