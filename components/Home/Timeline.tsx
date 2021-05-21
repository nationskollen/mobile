/**
 * @category Home
 * @module TimeLine
 */
import React, { useMemo } from 'react'
import { FlatList, View } from 'react-native'
import { useDatePicker } from './DatePickerContext'
import { useEvents, Nation } from '@nationskollen/sdk'
import { useTranslation } from '../../translate/LanguageContext'
import { useFilter } from './Filtering/FilterContext'
import GestureRecognizer from 'react-native-swipe-detect'

import ListEmpty from '../List/ListEmpty'
import ListFooter from '../List/ListFooter'
import EventItem from '../Events/Event'
import LoadingCircle from '../Common/LoadingCircle'
import FilterCheckboxesType from './Filtering/FilterCheckboxes'

export interface Props {
    nation?: Nation
}

const Timeline = ({ nation }: Props) => {
    const { date, changeDateByNum } = useDatePicker()
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
        onlyStudents: filters.noCard,
        onlyMembers: filters.noMembership,
    }

    if (filters.noCard) {
        delete useEventsInput.onlyStudents
    }
    if (filters.noMembership) {
        delete useEventsInput.onlyMembers
    }

    const { data, error, isValidating, mutate, size, setSize, pagination } = useEvents(
        nation?.oid,
        useEventsInput
    )

    return (
        <GestureRecognizer
            config={{
                directionalOffsetThreshold: 60,
                enableSwipeDown: false,
                enableSwipeUp: false,
            }}
            onSwipeLeft={() => changeDateByNum(1)}
            onSwipeRight={() => changeDateByNum(-1)}
        >
            <View style={{ width: '100%', height: '100%' }}>
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
                    onEndReached={() =>
                        pagination && pagination.last_page !== size && setSize(size + 1)
                    }
                    ListFooterComponent={() => (
                        <ListFooter
                            pagination={pagination}
                            isValidating={isValidating}
                            size={size}
                        />
                    )}
                    ListEmptyComponent={() =>
                        ListEmpty({
                            error,
                            loading: isValidating,
                            message: translate.events.empty,
                        })
                    }
                />
            </View>
        </GestureRecognizer>
    )
}

const excludeOids = (filters: FilterCheckboxesType): Array<number> => {
    var oids = []

    for (let oid in filters.nations) {
        if (filters.nations[oid]) oids.push(oid)
    }

    return oids
}

const excludeCategories = (filters: FilterCheckboxesType): Array<number> => {
    var categories = []

    for (let id in filters.categories) {
        if (filters.categories[id]) categories.push(parseInt(id))
    }

    return categories
}

export default Timeline
