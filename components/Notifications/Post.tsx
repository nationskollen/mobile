// This component is used for rendering each notification.
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'

// TODO: Remove this and use function or type from SDK
interface Props {
    data: {
        nation: any
        title: string
        text: string
        publishTime: string
        eventTime: string
    }
}

const Post: React.FC<Props> = ({ data }) => {
    const { colors } = useTheme()
    const { nation, title, text, eventTime } = data

    return (
        <View style={[styles.notificationWrapper, { borderColor: colors.border }]}>
            <View style={styles.header}>
                <View
                    style={[
                        styles.nationLogoImgWrapper,
                        { backgroundColor: colors.backgroundHighlight },
                    ]}
                >
                    <Image
                        source={require('../../img/png/vdala/vdalalogga.png')}
                        style={styles.nationLogoImg}
                    />
                </View>
                <View>
                    <Text style={[styles.nationName, { color: colors.primaryText }]}>{nation}</Text>
                    <Text style={[styles.notificationHeader, { color: colors.text }]}>{title}</Text>
                </View>
            </View>
            <View>
                {/* Do we really need to show when it was published? */}
                {/* Either way, it should probably be moved somewhere else since it */}
                {/* is not really that important compared to the nation and type. */}
                {/* <Text style={styles.publishTime}> */}
                {/*     {publishTime} */}
                {/* </Text> */}
                <Text style={[styles.content, { color: colors.text }]}>{text}</Text>
                <View
                    style={[
                        styles.eventTime,
                        {
                            borderColor: colors.border,
                            backgroundColor: colors.backgroundExtra,
                        },
                    ]}
                >
                    <Text style={{ color: colors.text }}>{eventTime}</Text>
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
        height: 30,
        width: 45,
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
