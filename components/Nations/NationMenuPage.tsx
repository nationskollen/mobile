/**
 * Renders a single menu and all of its contents.
 *
 * @category Nations
 * @module NationMenuPage
 */
import React, { useLayoutEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { useMenu } from '@dsp-krabby/sdk'
import { TabStackParamList } from '../Footer'
import { RouteProp } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from '../../translate/LanguageContext'

import MenuItem from './MenuItem'
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
    const { data, error, isValidating, mutate } = useMenu(menuId)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderButton icon="search" onPress={() => console.log('hello')} />,
        })
    }, [navigation])

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
