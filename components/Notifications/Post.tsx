/**
 * @category Notifications
 * @module Post
 */
// This component is used for rendering each notification.
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useNation, Notification } from '@nationskollen/sdk'
import { useTheme } from '../ThemeContext'

import Title from '../Common/Title'
import NationLogo from '../Nations/Front/NationLogo'
import { useTranslation } from '../../translate/LanguageContext'

export interface Props {
    notification: Notification
}

const Post = ({ notification }) => {
    const { colors } = useTheme()
    const { data: nation } = useNation(notification.nation_id)
    const { translate } = useTranslation()

    return (
        <View style={[styles.notificationWrapper, { borderColor: colors.border }]}>
            <View style={styles.header}>
                <NationLogo src={nation?.icon_img_src} size={50} />
                <View style={styles.headerWrapper}>
                    {nation && (
                        <Title
                            label={nation.name}
                            style={{ color: colors.primaryText }}
                            noMargin={true}
                        />
                    )}
                    <Title label={translate.titles.notifications} />
                </View>
            </View>
            <View>
                <Text style={[styles.content, { color: colors.text }]}>{notification.message}</Text>
                <View
                    style={[
                        styles.eventTime,
                        {
                            borderColor: colors.border,
                            backgroundColor: colors.backgroundExtra,
                        },
                    ]}
                >
                    <Text style={{ color: colors.text }}>{notification.created_at}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationWrapper: {
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },

    headerWrapper: {
        marginLeft: 15,
    },

    nationLogoImg: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 45,
        width: 45,
        borderRadius: 45,
    },

    nationLogoImgWrapper: {
        marginRight: 15,
        justifyContent: 'center',
        width: 55,
        height: 55,
        borderRadius: 50,
    },

    notificationHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    nationName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    publishTime: {
        fontSize: 14,
    },

    eventTime: {
        fontSize: 16,
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },

    content: {
        overflow: 'hidden',
    },
})

export default Post
