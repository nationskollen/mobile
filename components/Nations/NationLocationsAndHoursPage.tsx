/**
 * Renders the location and opening hours page.
 * Fetches all available locations for the nations
 * and displays all available information.
 *
 * @category Nations
 * @module NationLocationsAndHoursPage
 */
import React from 'react'
import { View, FlatList } from 'react-native'
import { TabStackParamList } from '../Footer/Footer'
import { useLocations } from '@dsp-krabby/sdk'
import { RouteProp } from '@react-navigation/native'
import { useTranslation } from '../../translate/LanguageContext'

import Location from './Location'
import ListEmpty from '../List/ListEmpty'
import LoadingCircle from '../Assets/LoadingCircle'
import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationLocationsAndHours'>
}

const NationLocationsAndHoursPage = ({ route }: Props) => {
    const { nation } = route.params
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate } = useLocations(nation.oid)

    return (
        <NationBasePage
            title={translate.titles.nationLocationAndHours}
            nation={nation}
            cardBackground={true}
        >
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Location location={item} accentColor={nation.accent_color} />
                )}
                keyExtractor={(item) => item.name}
                refreshControl={
                    <LoadingCircle
                        validating={isValidating}
                        mutate={mutate}
                        accent={nation.accent_color}
                    />
                }
                ListHeaderComponent={<View style={{ height: 5 }} />}
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
