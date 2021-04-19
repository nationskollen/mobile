// This component is used for rendering each notification.

import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useApi } from '@dsp-krabby/sdk/lib/react'
import { useAsync } from 'react-async-hook'
import { Loading } from '../../assets/styled/styledComponents'

function NotificationsContent({ notificationList }) {
    const api = useApi()
    const { loading, result, error, execute } = useAsync(api.nations.all, [])
    const [nationArr, changeState] = useState(notificationList)
    const [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState(1)
    const [refreshing, setRefreshing] = useState(false)
    const [shouldRefresh, setShouldRefresh] = useState(false)
    // Used for loading new notifications on bottom scroll

    function loadPage(pageNumber = page) {
        setLoading(true)
        setPage(pageNumber + 1)
        // Just a holder for when we have data in the DB
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    function loadNewNotifications() {
        setRefreshing(true)
        loadPage(1)
        setRefreshing(false)
    }
    return (
        <FlatList
            data={Object.keys(nationArr)}
            renderItem={({ item }) => <RenderNotification notification={nationArr[item].name} />}
            onEndReached={() => loadPage()}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isLoading && <Loading />}
            onRefresh={loadNewNotifications}
            refreshing={refreshing}
        />
    )
}

function RenderNotification({ notification }) {
    const { nation, title, text } = notification

    //TODO: replace publishTime with calculated "x minutes/hours/days ago"
    let publishTime = notification.publishTime
    //TODO: replace date in eventTime with "Today" or just "MM/DD"
    let eventTime = notification.eventTime
    const { colors } = useTheme()

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
                <View style={styles.headerContent}>
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
                            color: colors.text,
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

export default NotificationsContent
