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
import Calendar from '../../Home/Calendar'
import { DatePickerProvider } from '../../Home/DatePickerContext'
import { SheetProvider } from '../../Home/SheetContext'
import BottomSheet from '../../Home/Bottomsheet'
import FilterButtons from '../../Home/Filtering/FilterButtons'
import { FilterProvider } from '../../Home/Filtering/FilterContext'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationEvents'>
}

const NationEventsPage = ({ route }: Props) => {
    const { nation } = route.params
    const { translate } = useTranslation()

    return (
        <NationBasePage title={translate.titles.nationEvents} nation={nation} cardBackground={true}>
            <DatePickerProvider>
                <FilterProvider>
                    <SheetProvider>
                        <FilterBar hideNationFilter={true} />
                        <Calendar />
                        <Timeline nation={nation} />
                        <BottomSheet>
                            <FilterButtons hideNationFilter={true}></FilterButtons>
                        </BottomSheet>
                    </SheetProvider>
                </FilterProvider>
            </DatePickerProvider>
        </NationBasePage>
    )
}

export default NationEventsPage
