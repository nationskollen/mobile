/**
 * @category Home
 * @module TimeLine
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useEvents, Nation } from '@dsp-krabby/sdk'
import { useDatePicker } from './DatePickerContext'
import { useTranslation } from '../../translate/LanguageContext'

import ListEmpty from '../List/ListEmpty'
import ListFooter from '../List/ListFooter'
import EventItem from '../Events/Event'
import LoadingCircle from '../Assets/LoadingCircle'

export interface Props {
    nation?: Nation
}

const Timeline = ({ nation }: Props) => {
    const { date } = useDatePicker()
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate, size, setSize, pagination } = useEvents(
        nation?.oid,
        {
            date,
            amount: 15,
        }
    )

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
                    message: translate.events.empty,
                })
            }
        />
    )
}

export default Timeline
