/**
 * Renders the home page of a nation with a header
 * and links to pages containing more information, e.g.
 * locations, menus and events.
 *
 * @category Nations
 * @module NationHomePage
 */
import React, { useEffect, useRef, useCallback } from 'react'
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
import TodaysOpeningHours from './TodaysOpeningHours'
import FocusAwareStatusBar from '../FocusAwareStatusBar'
import NavigationBackArrow from '../NavigationBackArrow'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationHome'>
}

const PARALLAX_HEADER_HEIGHT = 295

const NationHomePage = ({ route }: Props) => {
    const { oid } = route.params
    const { colors, isDarkMode } = useTheme()
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    const { translate } = useTranslation()
    const headerHeight = useHeaderHeight()
    const arrowColor = useRef(new Animated.Value(0)).current
    const currentDate = useRef(new Date()).current
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

    useEffect(() => {
        if (nation?.default_location) {
            navigation.setOptions({
                headerRight: () => <ActivityLevel location={nation.default_location} />,
            })
        }
    }, [nation?.default_location])

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
    }, [isDarkMode])

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
                        { height: headerHeight + StatusBar.currentHeight },
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
            scrollEvent={Animated.event([{ nativeEvent: { contentOffset: { y: arrowColor } } }], {
                useNativeDriver: false,
            })}
        >
            <FocusAwareStatusBar backgroundColor={nation.accent_color} />
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
            <View style={styles.descriptionContainer}>
                <Title label={translate.nation.description} />
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
