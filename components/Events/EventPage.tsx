/**
 * @category Home
 * @module EventPage
 */
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer/Footer'
import { RouteProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { useEventDescription } from '@nationskollen/sdk'
import { useTranslation } from '../../translate/LanguageContext'

import Title from '../Common/Title'
import EventDates from '../Events/Dates'
import ParallaxHeader from '../Header/ParallaxHeader'
import EventCategory from '../Events/Category'
import ContentSection from '../Common/ContentSection'
import ContentContainer from '../Common/ContentContainer'
import EventLocation from '../Events/EventLocation'
import EventPageSkeleton from '../Skeletons/EventPage'
import ReminderButton from './ReminderButton'
import { HEADER_BUTTON_WIDTH } from '../Header/HeaderButton'

export interface Props {
    route: RouteProp<TabStackParamList, 'Event'>
}

const EventPage = ({ route }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const navigation = useNavigation()
    const { event, nation, eventAddress } = route.params
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate } = useEventDescription(event.id)

    // Update the activity level subscription dynamically based on the
    // selected nation.
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <ReminderButton
                    event={event}
                    eventAddress={eventAddress}
                    nationName={nation.name}
                    hideLabel={true}
                    style={{
                        marginRight: 15,
                        backgroundColor: isDarkMode
                            ? colors.backgroundExtra
                            : colors.backgroundHighlight,
                    }}
                />
            ),
        })
    }, [isDarkMode])

    return (
        <ParallaxHeader
            height={295}
            accent={nation.accent_color}
            isValidating={isValidating}
            mutate={mutate}
            title={event.name}
            src={event.cover_img_src}
            iconSrc={nation.icon_img_src}
            rightTitleOffset={HEADER_BUTTON_WIDTH}
            renderForeground={() => (
                <View style={[styles.foreground, { backgroundColor: colors.background }]}>
                    <EventCategory event={event} />
                    <Title label={event.name} size="large" noMargin={true} style={styles.title} />
                </View>
            )}
        >
            <View style={[styles.dateContainer, { backgroundColor: colors.backgroundExtra }]}>
                <Text style={{ color: colors.text }}>{event.occurs_at}</Text>
            </View>
            {error && <Text style={{ color: colors.text }}>{translate.events.failedToLoad}</Text>}
            {data ? (
                <View style={{ paddingBottom: 45 }}>
                    <ContentSection>
                        <Title label={translate.event.description} size="large" />
                        <Text style={{ color: colors.text }}>{data.long_description}</Text>
                    </ContentSection>
                    <EventLocation nation={nation} locationId={event.location_id} />
                    <ContentSection>
                        <EventDates created={data.created_at} updated={data.updated_at} />
                    </ContentSection>
                </View>
            ) : (
                <ContentContainer>
                    <EventPageSkeleton />
                </ContentContainer>
            )}
        </ParallaxHeader>
    )
}

const styles = StyleSheet.create({
    foreground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    title: {
        marginTop: 30,
    },

    container: {
        flex: 1,
        paddingTop: 10,
        flexDirection: 'column',
    },

    nationName: {
        fontWeight: 'bold',
        fontSize: 13,
    },

    dateContainer: {
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default EventPage
