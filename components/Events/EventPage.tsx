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
import EventDates from '../Events/Dates'
import HeaderButton from '../HeaderButton'
import ParallaxHeader from '../ParallaxHeader'
import ContentContainer from '../ContentContainer'
import EventLocation from '../Events/EventLocation'
import EventPageSkeleton from '../Skeletons/EventPage'

export interface Props {
    route: RouteProp<TabStackParamList, 'Event'>
}

const EventPage = ({ route }: Props) => {
    const { colors, isDarkMode } = useTheme()
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
    }, [isDarkMode])

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
                    <Title
                        label={nation.name}
                        size="medium"
                        style={{ color: colors.primaryText }}
                        noMargin={true}
                    />
                    <Title label={event.name} size="large" noMargin={true} />
                </View>
            )}
        >
            {error && <Text style={{ color: colors.text }}>{translate.events.failedToLoad}</Text>}
            {data ? (
                <View>
                    <View
                        style={[styles.dateContainer, { backgroundColor: colors.backgroundExtra }]}
                    >
                        <Text style={{ color: colors.text }}>{event.occurs_at}</Text>
                    </View>
                    <ContentContainer>
                        <Title label="Description" size="large" />
                        <Text style={{ color: colors.text }}>{data.long_description}</Text>
                    </ContentContainer>
                    <Title label="Location" size="large" style={{ marginLeft: 15 }} />
                    <EventLocation nation={nation} locationId={event.location_id} />
                    <ContentContainer>
                        <EventDates created={data.created_at} updated={data.updated_at} />
                    </ContentContainer>
                </View>
            ) : (
                <EventPageSkeleton />
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
