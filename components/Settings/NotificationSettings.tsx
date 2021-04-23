import React from 'react'
import { FlatList } from 'react-native'
import { useNations } from '@dsp-krabby/sdk'

import Dropdown from '../Dropdown'
import ListEmpty from '../ListEmpty'
import LoadingCircle from '../LoadingCircle'
import NationLogo from '../Nations/NationLogo'
import NotificationOptions from './NotificationOptions'

const NotificationSettings = () => {
    const { data, error, isValidating, mutate } = useNations()

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Dropdown
                    title={item.name}
                    expandComponent={<NotificationOptions />}
                    icon={<NationLogo src={item.icon_img_src} />}
                />
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
