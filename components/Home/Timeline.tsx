import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native'
import React from 'react'
import { useEvents } from '@dsp-krabby/sdk'

import EventItem from '../Timeline/Event'

interface Props {
    date: Date
}

const Timeline: React.FC<Props> = ({date}) => {
    // var eventList = getEventList(date)
    const { data } = useEvents({ date })

    // TODO: render events in flatlist

    return (
        <View style={styles.container}>
            <ScrollView>
                {data && data.map((event) => (
                    //@ts-ignore
                    <EventItem key={event.id} event={event} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Timeline
