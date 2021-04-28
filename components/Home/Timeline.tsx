/**
 * @category Home
 * @module TimeLine
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useEvents } from '@dsp-krabby/sdk'
import { useDatePicker } from './DatePickerContext'

import ListEmpty from '../ListEmpty'
import ListFooter from '../ListFooter'
import EventItem from '../Events/Event'
import LoadingCircle from '../LoadingCircle'

export interface Props {
    oid: number
}

const Timeline = ({ oid }: Props) => {
    const { date } = useDatePicker()
    const { data, error, isValidating, mutate, size, setSize, pagination } = useEvents(oid, {
        date,
        amount: 15,
    })

    const shouldRenderFooter = pagination && pagination.total > 0

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <EventItem event={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
            onEndReachedThreshold={1}
            onEndReached={() => pagination && pagination.last_page !== size && setSize(size + 1)}
            ListFooterComponent={() =>
                shouldRenderFooter ? (
                    <ListFooter hasMore={isValidating || pagination.last_page !== size} />
                ) : null
            }
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
