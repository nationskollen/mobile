/**
 * Renders all events for the selected nation.
 * Uses the Timeline component, as on the Home page, with nation colors.
 *
 * @category Nations
 * @module NationEventsPage
 */
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { TabStackParamList } from '../../Footer/Footer'
import { useTranslation } from '../../../translate/LanguageContext'

import Timeline from '../../Home/Timeline'
import FilterBar from '../../Home/FilterBar'
import NationBasePage from '../Front/NationBasePage'
import { DatePickerProvider } from '../../Home/DatePickerContext'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationEvents'>
}

const NationEventsPage = ({ route }: Props) => {
    const { nation } = route.params
    const { translate } = useTranslation()

    return (
        <NationBasePage title={translate.titles.nationEvents} nation={nation} cardBackground={true}>
            <DatePickerProvider>
                <FilterBar hideNationFilter={true} />
                <Timeline nation={nation} />
            </DatePickerProvider>
        </NationBasePage>
    )
}

export default NationEventsPage
