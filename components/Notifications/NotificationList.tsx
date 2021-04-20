// This component is used for rendering each notification.
import React from 'react'
import { ScrollView } from 'react-native'
import Post from './Post'

// TODO: Remove this and use SDK function for fetching notifications instead
interface Props {
    notifications: Array<any>
}

const NotificationsContent: React.FC<Props> = ({ notifications }) => {
    return (
        <ScrollView>
            {notifications.map((item, index) => (
                <Post key={index} data={item} />
            ))}
        </ScrollView>
    )
}

export default NotificationsContent
