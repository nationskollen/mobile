/**
 * @category Nations
 * @module NationLocationsAndHoursPage
 */
import React from 'react'
import { FlatList } from 'react-native'
import { TabStackParamList } from '../Footer'
import { useLocations } from '@dsp-krabby/sdk'
import { RouteProp } from '@react-navigation/native'

import Location from './Location'
import ListEmpty from '../ListEmpty'
import LoadingCircle from '../LoadingCircle'
import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationLocationsAndHours'>
}

const NationLocationsAndHoursPage = ({ route }: Props) => {
    const { nation } = route.params
    const { data, error, isValidating, mutate } = useLocations(nation.oid)

    return (
        <NationBasePage nation={nation} style={{ paddingTop: 5 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Location location={item} accentColor={nation.accent_color} />
                )}
                keyExtractor={(item) => item.name}
                refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
                ListEmptyComponent={() =>
                    ListEmpty({
                        error,
                        loading: isValidating,
                        message: 'Inga platser',
                    })
                }
            />
        </NationBasePage>
    )
}

export default NationLocationsAndHoursPage
