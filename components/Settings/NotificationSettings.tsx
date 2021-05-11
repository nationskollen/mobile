/**
 * @category Settings
 * @module NotificationSettings
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useNations } from '@nationskollen/sdk'

import Dropdown from '../Common/Dropdown'
import ListEmpty from '../List/ListEmpty'
import LoadingCircle from '../Common/LoadingCircle'
import NationLogo from '../Nations/Front/NationLogo'
import NotificationOptions from './NotificationOptions'

const NotificationSettings = () => {
    const { data, error, isValidating, mutate } = useNations()

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Dropdown title={item.name} icon={<NationLogo src={item.icon_img_src} />}>
                    <NotificationOptions />
                </Dropdown>
            )}
            keyExtractor={(item) => item.oid.toString()}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
            ListEmptyComponent={() =>
                ListEmpty({
                    error,
                    loading: isValidating,
                    message: 'Inga nationer',
                })
            }
        />
    )
}

export default NotificationSettings
