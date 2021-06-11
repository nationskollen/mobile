/**
 * Renders an Icon with a notification badge
 * 
 * @category Common
 * @module NotificationBadge
 */

import React from 'react'
import { useNotifications } from '@nationskollen/sdk'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { usePushToken } from '../PushTokenContext'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../ThemeContext'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers'
import { StyleSheet } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'

export type BadgeProps = {
    name: any
    showNum?: boolean
}

export const BadgedIcon = ({name, showNum}:BadgeProps) => {
    const { colors } = useTheme()
    const { token } = usePushToken()
    if (!token) return null

    const { data, error, isValidating, mutate } = useNotifications(token)

    const Icon = <Ionicons name="notifications" size={23} color="black"></Ionicons>

    if (data.length < 1) {
        return Icon
    }
    
    return (
        <Badge
            value={3} //{showNum ? data.length : null} 
            containerStyle={styles.container}
        >
            {Icon}
        </Badge>
    )

}

const styles=StyleSheet.create({

    container: {

    },

})

export default BadgedIcon