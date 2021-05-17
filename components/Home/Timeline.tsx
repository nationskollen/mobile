/**
 * @category Home
 * @module TimeLine
 */
import React, { useMemo } from 'react'
import { FlatList } from 'react-native'
import { useDatePicker } from './DatePickerContext'
import { useEvents, Nation } from '@nationskollen/sdk'
import { useTranslation } from '../../translate/LanguageContext'
import { useFilter } from './Filtering/FilterContext'

import ListEmpty from '../List/ListEmpty'
import ListFooter from '../List/ListFooter'
import EventItem from '../Events/Event'
import LoadingCircle from '../Common/LoadingCircle'
import FilterCheckboxesType from './Filtering/FilterCheckboxes'

export interface Props {
    nation?: Nation
}

const Timeline = ({ nation }: Props) => {
    const { date } = useDatePicker()
    const { translate } = useTranslation()
    const { filters } = useFilter()

    const exclude = useMemo(() => {
        return {
            oids: excludeOids(filters),
            categories: excludeCategories(filters),
        }
    }, [filters])

    const useEventsInput = {
        date,
        amount: 10,
        excludeOids: exclude.oids,
        excludeCategories: exclude.categories,
        onlyStudents: filters.student[0],
        onlyMembers: filters.student[1],
    }

    // if "no nation card" and "no membership" are true, (meaning needscard and needsmembership are false)
    // show all events by deleting the filter params
    if (filters.student[0] && filters.student[1]) {
        delete useEventsInput.onlyStudents
        delete useEventsInput.onlyMembers
    }

    const { data, error, isValidating, mutate, size, setSize, pagination } = useEvents(
        nation?.oid,
        useEventsInput
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

const excludeOids = (filters: FilterCheckboxesType): Array<number> => {
    return Object.keys(filters.nations).map((key) => parseInt(key))
}

const excludeCategories = (filters: FilterCheckboxesType): Array<number> => {
    return Object.keys(filters.categories).map((key) => parseInt(key))
}

export default Timeline
