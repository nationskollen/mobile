/**
 * Renders a single menu and all of its contents.
 *
 * @category Nations
 * @module NationMenuPage
 */
import React, { useLayoutEffect, useState, useMemo } from 'react'
import { FlatList } from 'react-native'
import { useMenu, MenuItem as MenuItemResponse } from '@dsp-krabby/sdk'
import { TabStackParamList } from '../Footer'
import { RouteProp } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from '../../translate/LanguageContext'

import MenuItem from './MenuItem'
import SearchBar from '../SearchBar'
import ListEmpty from '../ListEmpty'
import HeaderButton from '../HeaderButton'
import LoadingCircle from '../LoadingCircle'
import NationBasePage from './NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationMenu'>
}

const NationMenuPage = ({ route }: Props) => {
    const { nation, menuId } = route.params
    const navigation = useNavigation()
    const { translate } = useTranslation()
    const [query, setQuery] = useState<string | null>(null)
    const [showSearchBar, setShowSearchBar] = useState(false)
    const { data, error, isValidating, mutate } = useMenu(menuId)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderButton icon="search" onPress={() => setShowSearchBar(!showSearchBar)} />
        })
    }, [navigation, showSearchBar])

    const filteredData = useMemo(() => {
        if (!data) {
            return []
        }

        if (!query) {
            return data.items
        }

        const normalizedQuery = query.toLowerCase()

        // Filter by name
        return data.items.filter((item: MenuItemResponse) => (
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery)
        ))
    }, [data, query])

    return (
        <NationBasePage nation={nation} title={data?.name}>
            {showSearchBar && <SearchBar placeholder={translate.menu.searchPlaceholder} onSearch={setQuery} autoFocus={true} />}
            <FlatList
                data={filteredData}
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
                        message: query === null ? translate.menu.empty : translate.menu.noResults,
                    })
                }
            />
        </NationBasePage>
    )
}

export default NationMenuPage
