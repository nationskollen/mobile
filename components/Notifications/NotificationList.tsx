/**
 * @category Notifications
 * @module NotificationList
 */
import React from 'react'
import { FlatList, Text } from 'react-native'
import { useTheme } from '../ThemeContext'
import { usePushToken } from '../PushTokenContext'
import { useNotifications } from '@nationskollen/sdk'

import Post from './Post'
import ListEmpty from '../List/ListEmpty'
import LoadingCircle from '../Common/LoadingCircle'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'

const NotificationsContent = () => {
    const { colors } = useTheme()
    const { token } = usePushToken()

    // If not token could be fetched, we can not use notifications
    if (!token) {
        return null
    }

    const { data, error, isValidating, mutate } = useNotifications(token)

    return (
        <>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            <FlatList
                data={data}
                renderItem={({ item }) => <Post data={item} />}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
                ListEmptyComponent={() =>
                    ListEmpty({
                        error,
                        loading: isValidating,
                        message: 'Inga notifikationer',
                    })
                }
            />
        </>
    )
}

export default NotificationsContent
