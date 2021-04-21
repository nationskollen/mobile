// This component is used for rendering each notification.
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import LogoCircle from '../Nations/LogoCircle'

// TODO: Remove this and use function or type from SDK
interface Props {
    data: {
        name: string
        description: string
        icon_img_src: string
    }
}

const Post: React.FC<Props> = ({ data }) => {
    const { colors } = useTheme()
    const { name, icon_img_src, description } = data

    return (
        <View style={[styles.notificationWrapper, { borderColor: colors.border }]}>
            <View style={styles.header}>
                <LogoCircle src={icon_img_src} size={50} />
                <View>
                    <Text style={[styles.nationName, { color: colors.primaryText }]}>{name}</Text>
                    <Text style={[styles.notificationHeader, { color: colors.text }]}>
                        Notification
                    </Text>
                </View>
            </View>
            <View>
                {/* Do we really need to show when it was published? */}
                {/* Either way, it should probably be moved somewhere else since it */}
                {/* is not really that important compared to the nation and type. */}
                {/* <Text style={styles.publishTime}> */}
                {/*     {publishTime} */}
                {/* </Text> */}
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
