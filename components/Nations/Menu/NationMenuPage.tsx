/**
 * Renders a single menu and all of its contents.
 *
 * @category Nations
 * @module NationMenuPage
 */
import React, { useLayoutEffect, useState } from 'react'
import { useMenu } from '@dsp-krabby/sdk'
import { TabStackParamList } from '../../Footer/Footer'
import { RouteProp } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from '../../../translate/LanguageContext'

import MenuItems from './MenuItems'
import SearchBar from '../../Common/SearchBar'
import HeaderButton from '../../Header/HeaderButton'
import NationBasePage from '../Front/NationBasePage'

export interface Props {
    route: RouteProp<TabStackParamList, 'NationMenu'>
}

const NationMenuPage = ({ route }: Props) => {
    const { nation, menuId } = route.params
    const navigation = useNavigation()
    const { translate } = useTranslation()
    const { data } = useMenu(menuId)
    const [query, setQuery] = useState<string | null>(null)
    const [showSearchBar, setShowSearchBar] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButton icon="search" onPress={() => setShowSearchBar(!showSearchBar)} />
            ),
        })
    }, [navigation, showSearchBar])

    return (
        <NationBasePage nation={nation} title={data?.name}>
            {showSearchBar && (
                <SearchBar
                    placeholder={translate.menu.searchPlaceholder}
                    onSearch={setQuery}
                    autoFocus={true}
                />
            )}
            <MenuItems query={query} menuId={menuId} />
        </NationBasePage>
    )
}

export default NationMenuPage
