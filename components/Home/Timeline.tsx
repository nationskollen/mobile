import React from 'react'
import { FlatList } from 'react-native'
import { useDatePicker } from './DatePickerContext'
import { useEvents, useNationEvents } from '@dsp-krabby/sdk'

import EventItem from './Event'
import LoadingCircle from '../LoadingCircle'

interface Props {
    oid: number
}

const Timeline: React.FC<Props> = ({ oid }) => {
    const { date } = useDatePicker()
    const { data, isValidating, mutate } = oid ? useNationEvents(oid) : useEvents({ date })

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <EventItem event={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
        />
    )
}

export default Timeline
