/**
 * Renders the available menus for the nation.
 *
 * @category Nations
 * @module NationMenusPage
 */
import React from 'react'
import { Text } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { TabStackParamList } from '../Footer'

import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationMenus'>
}

const NationLocationsPage = ({ route }: Props) => {
    const { nation } = route.params

    return (
        <NationBasePage nation={nation}>
            <Text>Menus</Text>
        </NationBasePage>
    )
}

export default NationLocationsPage
