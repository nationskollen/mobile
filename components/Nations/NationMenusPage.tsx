/**
 * Renders the available menus for the nation.
 *
 * @category Nations
 * @module NationMenusPage
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useTheme } from '../ThemeContext'
import { TabStackParamList } from '../Footer'
import { useLocations } from '@dsp-krabby/sdk'
import { RouteProp } from '@react-navigation/native'

import Menus from './Menus'
import ListEmpty from '../ListEmpty'
import LoadingCircle from '../LoadingCircle'
import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationMenus'>
}

const NationMenusPage = ({ route }: Props) => {
    const { colors } = useTheme()
    const { nation } = route.params
    const { data, error, isValidating, mutate } = useLocations(nation.oid)

    return (
        <NationBasePage nation={nation} style={{ backgroundColor: colors.background }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Menus location={item} />}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
                ListEmptyComponent={() =>
                    ListEmpty({
                        error,
                        loading: isValidating,
                        message: 'Inga menyer',
                    })
                }
            />
        </NationBasePage>
    )
}

export default NationMenusPage
