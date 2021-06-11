/**
 * Renders an Icon with a notification badge
 * 
 * @category Common
 * @module NotificationBadge
 */

import React from 'react'
import { useNotifications } from '@nationskollen/sdk'
import { Badge } from 'react-native-elements'
import { usePushToken } from '../PushTokenContext'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../ThemeContext'
import { StyleSheet } from 'react-native'

export type BadgeProps = {
    name: any
    showNum?: boolean
    color?:string
}

export const BadgedIcon = ({name, showNum, color}:BadgeProps) => {
    const { colors } = useTheme()
    const { token } = usePushToken()

    const Icon = <Ionicons name={name} size={23} color={color ?? colors.text}></Ionicons>

    // If no token could be fetched, render normal icon without badge
    if (!token) {
        return Icon
    }

    const { data } = useNotifications(token)

    if (!data) {
        return Icon
    }

    return (
        <>
            {Icon}

            {data.length > 0 && <Badge
                value={showNum ? data.length : null}
                containerStyle={styles.container}
                badgeStyle={{backgroundColor: colors.primary}}
                >     
            </Badge>
            }
        </>
    )
        
}
    

const styles=StyleSheet.create({
    container: {
        position:'absolute',
        top:2,
        right:15, 
    },
})

export default BadgedIcon