/**
 * @category Notifications
 * @module NotificationList
 */
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
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

    // If no token could be fetched, we can not use notifications
    if (!token) {
        return null
    }

    const { data, error, isValidating, mutate } = useNotifications(token)

    return (
        <>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            <FlatList
                data={data}
                renderItem={({ item }) => <Post notification={item} />}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
                ListEmptyComponent={() =>
                    ListEmpty({
                        error,
                        loading: isValidating,
                        message: 'Inga nya notifikationer',
                    })
                }
            />
        </>
    )
}

export default NotificationsContent
