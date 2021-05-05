/**
 * Renders a parallax header with a sticky header that will
 * fade in on scroll down.
 *
 * @category Common
 * @module ParallaxHeader
 */
import React, { useCallback, useState, useRef, useEffect } from 'react'
import { Dimensions, Animated, Platform, View, StyleSheet, StatusBar } from 'react-native'

import { useTheme } from '../ThemeContext'
import { useNavigation } from '@react-navigation/core'
import { useHeaderHeight } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ParallaxScrollView from 'react-native-parallax-scroll-view'

import Title from '../Common/Title'
import CoverImage from '../Common/CoverImage'
import LoadingCircle from '../Common/LoadingCircle'
import NationLogo from '../Nations/Front/NationLogo'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'
import NavigationBackArrow from '../Header/NavigationBackArrow'
import { TITLE_LEFT_OFFSET } from '../../screens/TitleOffsetOptions'

export interface Props {
    height: number
    accent: string
    isValidating: boolean
    mutate: (...args: unknown[]) => void
    title?: string
    src?: string | null
    renderForeground?: () => Element
    iconSrc?: string | null
    rightTitleOffset?: number
    children?: Element | Element[]
}

const HEADER_LOGO_SIZE = 35

const ParallaxHeader = ({
    height,
    title,
    src,
    iconSrc,
    accent,
    isValidating,
    mutate,
    renderForeground,
    rightTitleOffset,
    children,
}: Props) => {
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    const headerHeight = useHeaderHeight()
    const { colors, isDarkMode } = useTheme()
    const arrowColor = useRef(new Animated.Value(0)).current
    const [darkStatusBar, setDarkStatusBar] = useState(false)
    const headerOffset = Platform.OS === 'ios' ? insets.top / 2 : StatusBar.currentHeight / 2

    // Calculate the width of the title text based on the screen width and any right-side header buttons
    const titleWidth =
        Dimensions.get('window').width -
        (rightTitleOffset ?? 0) -
        TITLE_LEFT_OFFSET -
        (iconSrc !== 'undefined' ? HEADER_LOGO_SIZE : 0) -
        50

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
                            inputRange: [0, height - headerHeight],
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

    return (
        <ParallaxScrollView
            fadeOutForeground={false}
            backgroundScrollSpeed={1}
            parallaxHeaderHeight={height}
            style={{ marginBottom: contentHeightModifier }}
            backgroundColor={colors.background}
            stickyHeaderHeight={headerHeight}
            contentBackgroundColor={colors.background}
            renderForeground={renderForeground}
            renderBackground={() => (
                <CoverImage
                    src={src}
                    height={height}
                    hideFallbackIcon={true}
                    backgroundColor={accent}
                    overlayColor={accent}
                />
            )}
            renderStickyHeader={() => (
                <>
                    <View
                        style={[
                            styles.stickyHeaderContainer,
                            {
                                height: headerHeight,
                                marginTop: headerOffset,
                            },
                        ]}
                    >
                        {iconSrc !== undefined && (
                            <NationLogo src={iconSrc} size={HEADER_LOGO_SIZE} spacing={6} />
                        )}
                        {title && (
                            <Title
                                size="large"
                                numberOfLines={1}
                                label={title}
                                noMargin={true}
                                style={{
                                    marginLeft: iconSrc !== undefined ? 10 : 0,
                                    width: titleWidth,
                                }}
                            />
                        )}
                    </View>
                    <View
                        style={[
                            styles.stickyBorder,
                            { bottom: headerOffset, backgroundColor: colors.border },
                        ]}
                    />
                </>
            )}
            refreshControl={
                <LoadingCircle
                    validating={isValidating}
                    mutate={mutate}
                    accent={accent}
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
                backgroundColor={accent}
            />
            {children}
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    stickyHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: TITLE_LEFT_OFFSET,
    },

    stickyHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        position: 'absolute',
        bottom: 15,
        left: 0,
    },

    stickyBorder: {
        position: 'absolute',
        left: 0,
        width: '100%',
        height: 1,
        zIndex: 2,
    },

    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'column',
    },

    nationName: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
})

export default ParallaxHeader
