/**
 * Renders the available menus for the nation.
 *
 * @category Nations
 * @module NationMenusPage
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useLocations } from '@nationskollen/sdk'
import { RouteProp } from '@react-navigation/native'
import { TabStackParamList } from '../../Footer/Footer'
import { useTranslation } from '../../../translate/LanguageContext'

import Menus from './Menus'
import ListEmpty from '../../List/ListEmpty'
import LoadingCircle from '../../Common/LoadingCircle'
import NationBasePage from '../Front/NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationMenus'>
}

const NationMenusPage = ({ route }: Props) => {
    const { nation } = route.params
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate } = useLocations(nation.oid)

    // TODO: Add an endpoint for checking if there are any available menus
    // for the entire nation? Currently, rendering a message if there are no
    // menus is super complicated.
    return (
        <NationBasePage title={translate.titles.nationMenus} nation={nation} cardBackground={true}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Menus location={item} nation={nation} />}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <LoadingCircle
                        validating={isValidating}
                        mutate={mutate}
                        accent={nation.accent_color}
                    />
                }
                ListEmptyComponent={() =>
                    ListEmpty({
                        error,
                        loading: isValidating,
                        message: translate.menus.empty,
                    })
                }
            />
        </NationBasePage>
    )
}

export default NationMenusPage
