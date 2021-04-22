import React from 'react'
import { FlatList } from 'react-native'
import { useEvents } from '@dsp-krabby/sdk'
import { useDatePicker } from './DatePickerContext'

import EventItem from './Event'
import ListEmpty from '../ListEmpty'
import LoadingCircle from '../LoadingCircle'

const Timeline: React.FC = () => {
    const { date } = useDatePicker()
    const { data, error, isValidating, mutate } = useEvents({ date })

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <EventItem event={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
            ListEmptyComponent={() =>
                ListEmpty({
                    error,
                    loading: isValidating,
                    message: 'Inga events denna dag',
                })
            }
        />
    )
}

export default Timeline
