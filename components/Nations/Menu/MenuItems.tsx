/**
 * Renders all the items of a menu in an infinite loading list.
 *
 * @category Nations
 * @module MenuItems
 */
import React, { useMemo } from 'react'
import { FlatList } from 'react-native'
import { useMenuItems } from '@nationskollen/sdk'
import { useTranslation } from '../../../translate/LanguageContext'

import MenuItem from '../Menu/MenuItem'
import ListEmpty from '../../List/ListEmpty'
import ListFooter from '../../List/ListFooter'
import LoadingCircle from '../../Common/LoadingCircle'

export interface Props {
    menuId: number
    query: string | null
}

const MenuItems = ({ menuId, query }) => {
    const { translate } = useTranslation()
    const { data, error, isValidating, mutate, size, setSize, pagination } = useMenuItems(menuId)

    const filteredData = useMemo(() => {
        if (!data) {
            return []
        }

        if (!query) {
            return data
        }

        const normalizedQuery = query.toLowerCase()

        // Filter by name or description
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(normalizedQuery) ||
                item.description.toLowerCase().includes(normalizedQuery)
        )
    }, [data, query])

    // Make sure to not show the infinite loading footer if we have a search filter
    // that returned no results (otherwise we get two messages telling us the same thing)
    const shouldRenderFooter = query === null || filteredData.length !== 0

    return (
        <FlatList
            data={filteredData}
            renderItem={({ item }) => <MenuItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
            onEndReachedThreshold={1}
            onEndReached={() => pagination && pagination.last_page !== size && setSize(size + 1)}
            ListFooterComponent={() =>
                shouldRenderFooter ? (
                    <ListFooter pagination={pagination} isValidating={isValidating} size={size} />
                ) : null
            }
            ListEmptyComponent={() =>
                ListEmpty({
                    error,
                    loading: isValidating,
                    message: query === null ? translate.menu.empty : translate.menu.noResults,
                })
            }
        />
    )
}

export default MenuItems
