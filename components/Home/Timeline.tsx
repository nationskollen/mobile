/**
 * @category Home
 * @module TimeLine
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useDatePicker } from './DatePickerContext'
import { useEvents, Nation } from '@nationskollen/sdk'
import { useTranslation } from '../../translate/LanguageContext'

import ListEmpty from '../List/ListEmpty'
import ListFooter from '../List/ListFooter'
import EventItem from '../Events/Event'
import LoadingCircle from '../Common/LoadingCircle'

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
            amount: 10,
        }
    )

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <EventItem event={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={
                <LoadingCircle
                    validating={isValidating}
                    mutate={mutate}
                    skipIndicatorDelay={true}
                />
            }
            onEndReachedThreshold={1}
            onEndReached={() => pagination && pagination.last_page !== size && setSize(size + 1)}
            ListFooterComponent={() => (
                <ListFooter pagination={pagination} isValidating={isValidating} size={size} />
            )}
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
