/**
 * @category Notifications
 * @module NotificationList
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useTheme } from '../ThemeContext'
import { useNations } from '@nationskollen/sdk'

import Post from './Post'
import ListEmpty from '../List/ListEmpty'
import LoadingCircle from '../Common/LoadingCircle'
import FocusAwareStatusBar from '../Common/FocusAwareStatusBar'

// TODO: Currently, this renders nations as notifications since we
//       do not have implemented notifications on the server yet.
//       However, this allows us to the the reload functionality.
const NotificationsContent = () => {
    const { colors } = useTheme()
    const { data, error, isValidating, mutate } = useNations()

    return (
        <>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            <FlatList
                data={data}
                renderItem={({ item }) => <Post data={item} />}
                keyExtractor={(item) => item.name}
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
