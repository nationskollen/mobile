/**
 * Renders all events for the selected nation.
 * Uses the Timeline component, as on the Home page, with nation colors.
 *
 * @category Nations
 * @module NationEventsPage
 */
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { TabStackParamList } from '../Footer'

import Timeline from '../Home/Timeline'
import FilterBar from '../Home/FilterBar'
import NationBasePage from './NationBasePage'
import { DatePickerProvider } from '../Home/DatePickerContext'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationEvents'>
}

const NationHoursPage = ({ route }: Props) => {
    const { nation } = route.params

    return (
        <NationBasePage nation={nation}>
            <DatePickerProvider>
                <FilterBar hideNationFilter={true} />
                <Timeline nation={nation} />
            </DatePickerProvider>
        </NationBasePage>
    )
}

export default NationHoursPage
