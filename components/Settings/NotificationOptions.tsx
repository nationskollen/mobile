/**
 * @category Settings
 * @module NotificationOptions
 */
import React, { useState, useCallback } from 'react'
import { useTheme } from '../ThemeContext'
import { useAsyncCallback } from 'react-async-hook'
import { View, StyleSheet, Text } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { useApi, SubscriptionTopicCollection, SubscriptionCreateData } from '@nationskollen/sdk'
import { useTranslation } from '../../translate/LanguageContext'
import LanguageContextType from '../../translate/LanguageContextType'

export type ToggleCallback = (toggled: boolean, topicId: number) => void

export interface Props {
    oid: number
    token: string
    topics: SubscriptionTopicCollection
}

export interface ToggleProps {
    text: string
    oid: number
    topicId: number
    token: string
}

function translateTopic(topicName: string, translate: LanguageContextType) {
    switch (topicName) {
        case 'events':
            return translate.settings.notificationsetting.events
        case 'news':
            return translate.settings.notificationsetting.news
        default:
            return topicName
    }
}

/// Renders the different notification options
const NotificationOptions = ({ topics, oid, token }: Props) => {
    const { translate } = useTranslation()

    return (
        <View style={styles.options}>
            {topics.map((topic) => (
                <Toggle
                    key={topic.id}
                    token={token}
                    oid={oid}
                    topicId={topic.id}
                    text={translateTopic(topic.name, translate)}
                />
            ))}
        </View>
    )
}

// TODO: How should we set the initial state?
const Toggle = ({ text, topicId, oid, token }: ToggleProps) => {
    const api = useApi()
    const { colors } = useTheme()
    const [toggled, setToggled] = useState(false)
    const createAction = useAsyncCallback((data: SubscriptionCreateData) => api.subscriptions.create(data))
    const deleteAction = useAsyncCallback((uuid: string) => api.subscriptions.delete(uuid))

    const toggleCallback = useCallback((toggled: boolean) => {
        setToggled(toggled)

        if (toggled) {
            createAction.execute({ oid, topic: topicId, token })
        } else {
            deleteAction.execute('xxx')
        }
    }, [topicId, oid, token])

    return (
        <View style={[styles.switch, { borderBottomColor: colors.border }]}>
            <View style={styles.leftContainer}>
                <View style={[styles.dot, { backgroundColor: colors.primaryText }]} />
                <Text style={[styles.option, { color: colors.text }]}>{text}</Text>
            </View>
            <ToggleSwitch
                isOn={toggled}
                onColor="#05c46b"
                offColor={colors.borderDark}
                size="large"
                onToggle={() => toggleCallback(!toggled)}
            />
        </View>
    )
}

/// Styles for option switches
const styles = StyleSheet.create({
    options: {
        flexDirection: 'column',
    },

    option: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 15,
        marginLeft: 5,
    },

    switch: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
})

export default NotificationOptions
