/**
 * @category Nations
 * @module NationLocationsAndHoursPage
 */
import React from 'react'
import { Text } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { TabStackParamList } from '../Footer'

import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationLocationsAndHours'>
}

const NationLocationsAndHoursPage = ({ route }: Props) => {
    const { nation } = route.params

    return (
        <NationBasePage nation={nation}>
            <Text>Locations and hours</Text>
        </NationBasePage>
    )
}

export default NationLocationsAndHoursPage
