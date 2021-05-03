/**
 * Renders a single menu and all of its contents.
 *
 * @category Nations
 * @module NationMenuPage
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useMenu } from '@dsp-krabby/sdk'
import { TabStackParamList } from '../Footer'
import { RouteProp } from '@react-navigation/core'
import { useTranslation } from '../../translate/LanguageContext'

import MenuItem from './MenuItem'
import ListEmpty from '../ListEmpty'
import LoadingCircle from '../LoadingCircle'
import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationMenu'>
}

const NationMenuPage = ({ route }: Props) => {
    const { nation, menuId } = route.params
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate } = useMenu(menuId)

    return (
        <NationBasePage nation={nation} title={data?.name}>
            <FlatList
                data={data ? data.items : []}
                renderItem={({ item }) => <MenuItem item={item} />}
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
                        message: translate.menu.empty,
                    })
                }
            />
        </NationBasePage>
    )
}

export default NationMenuPage
