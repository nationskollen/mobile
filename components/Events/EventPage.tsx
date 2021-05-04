/**
 * @category Home
 * @module EventPage
 */
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer'
import { RouteProp } from '@react-navigation/native'
import { useEventDescription } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/core'
import { useTranslation } from '../../translate/LanguageContext'

import Title from '../Title'
import HeaderButton from '../HeaderButton'
import EventDates from '../Events/Dates'
import ParallaxHeader from '../ParallaxHeader'
import EventPageSkeleton from '../Skeletons/EventPage'

export interface Props {
    route: RouteProp<TabStackParamList, 'Event'>
}

const EventPage = ({ route }: Props) => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const { event, nation } = route.params
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate } = useEventDescription(event.id)

    // Update the activity level subscription dynamically based on the
    // selected nation.
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButton
                    icon="notifications-outline"
                    onPress={() => console.log('asd')}
                    color={colors.text}
                    backgroundColor={colors.backgroundExtra}
                />
            ),
        })
    }, [])

    return (
        <ParallaxHeader
            height={295}
            accent={nation.accent_color}
            isValidating={isValidating}
            mutate={mutate}
            title={event.name}
            src={event.cover_img_src}
            renderForeground={() => (
                <View style={[styles.foreground, { backgroundColor: colors.background }]}>
                    <Text style={[styles.nationName, { color: colors.text }]}>
                        {nation.name}
                    </Text>
                    <Text style={[styles.title, { color: colors.textHighlight }]}>
                        {event.name}
                    </Text>
                </View>
            )}
        >
            <View style={styles.container}>
                {error && (
                    <Text style={{ color: colors.text }}>{translate.events.failedToLoad}</Text>
                )}
                {data ? (
                    <View>
                        <Text style={{ color: colors.text }}>{data.long_description}</Text>
                        <EventDates created={data.created_at} updated={data.updated_at} />
                    </View>
                ) : (
                    <EventPageSkeleton />
                )}
            </View>
        </ParallaxHeader>
)
}

const styles = StyleSheet.create({
    foreground: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 15,
    },

    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
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

export default EventPage
