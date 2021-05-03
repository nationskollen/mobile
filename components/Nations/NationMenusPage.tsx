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
import { useTranslation } from '../../translate/LanguageContext'

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
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate } = useLocations(nation.oid)

    return (
        <NationBasePage nation={nation} cardBackground={true}>
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
