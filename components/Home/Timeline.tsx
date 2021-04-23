import React from 'react'
import { FlatList } from 'react-native'
import { useEvents } from '@dsp-krabby/sdk'
import { useDatePicker } from './DatePickerContext'

import EventItem from './Event'
import ListEmpty from '../ListEmpty'
import ListFooter from '../ListFooter'
import LoadingCircle from '../LoadingCircle'

interface Props {
    oid: number
}

const Timeline: React.FC<Props> = ({ oid }) => {
    const { date } = useDatePicker()
    const {
        data,
        error,
        isValidating,
        mutate,
        size,
        setSize,
        pagination,
    } = useEvents(oid, { date, amount: 15 })

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <EventItem event={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
            onEndReachedThreshold={1}
            onEndReached={() => pagination && pagination.last_page !== size && setSize(size + 1)}
            ListFooterComponent={() => <ListFooter hasMore={pagination.last_page !== size} />}
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
