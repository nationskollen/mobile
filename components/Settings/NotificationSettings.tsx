/**
 * @category Settings
 * @module NotificationSettings
 */
import React from 'react'
import { FlatList, Text } from 'react-native'
import { usePushToken } from '../PushTokenContext'
import { useNations, useSubscriptionTopics } from '@nationskollen/sdk'

import Dropdown from '../Common/Dropdown'
import ListEmpty from '../List/ListEmpty'
import LoadingCircle from '../Common/LoadingCircle'
import NationLogo from '../Nations/Front/NationLogo'
import NotificationOptions from './NotificationOptions'

const NotificationSettings = () => {
    const {
        data: topics,
        isValidating: isValidatingTopics,
        mutate: mutateTopics
    } = useSubscriptionTopics()
    const { token } = usePushToken()
    const { data, error, isValidating, mutate } = useNations()

    // TODO: Print error if push token could not be retrieved
    if (!token) {
        return null
    }

    // If no subscription topics can be found, we can not modify notifications
    if ((!topics || topics.length === 0) && !isValidatingTopics) {
        return <Text>Inga notifikationer tillg'ngliga</Text>
    }

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Dropdown title={item.name} icon={<NationLogo src={item.icon_img_src} />}>
                    <NotificationOptions
                        oid={item.oid}
                        token={token}
                        topics={topics}
                    />
                </Dropdown>
            )}
            keyExtractor={(item) => item.oid.toString()}
            refreshControl={
                <LoadingCircle
                    validating={isValidating}
                    mutate={() => {
                        mutate()
                        mutateTopics()
                    }}
                />
            }
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
