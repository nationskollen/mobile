// This component is used for rendering each notification.
import React from 'react'
import { Event } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'
import NationLogo from '../Nations/NationLogo'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    data: Event
}

const Post = ({ data }: Props) => {
    const { colors } = useTheme()
    const { name, icon_img_src, description } = data

    return (
        <View style={[styles.notificationWrapper, { borderColor: colors.border }]}>
            <View style={styles.header}>
                <NationLogo src={icon_img_src} size={50} />
                <View>
                    <Text style={[styles.nationName, { color: colors.primaryText }]}>{name}</Text>
                    <Text style={[styles.notificationHeader, { color: colors.textHighlight }]}>
                        Notification
                    </Text>
                </View>
            </View>
            <View>
                <Text style={[styles.content, { color: colors.text }]}>{description}</Text>
                <View
                    style={[
                        styles.eventTime,
                        {
                            borderColor: colors.border,
                            backgroundColor: colors.backgroundExtra,
                        },
                    ]}
                >
                    <Text style={{ color: colors.text }}>2021-04-20 13:37</Text>
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
        paddingVertical: 15,
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
        fontSize: 20,
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
