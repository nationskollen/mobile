import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'

import LogoCircle from '../Nations/LogoCircle'
import NotificationOptions from './NotificationOptions'

const Nation = ({ data }) => {
    const { colors } = useTheme()
    const [expand, setExpand] = useState(false)

    return (
        <View>
            <TouchableHighlight
                onPress={() => setExpand(!expand)}
                underlayColor={colors.backgroundHighlight}
            >
                <View
                    key={data.id}
                    style={[
                        styles.nationWrapper,
                        {
                            backgroundColor: colors.background,
                            borderBottomColor: colors.border,
                        },
                    ]}
                >
                    {/*Logo of nation*/}
                    <LogoCircle src={data.icon_img_src} size={50} />

                    {/*Name of nation*/}
                    <Text style={[styles.nationName, { color: colors.text }]}>{data.name}</Text>

                    {/*Button for choosing nation*/}
                    <Ionicons
                        name={expand ? 'md-chevron-up' : 'md-chevron-down'}
                        size={24}
                        color={colors.text}
                    />
                </View>
            </TouchableHighlight>
            {expand && <NotificationOptions />}
        </View>
    )
}

export const Cock  = ['English', 'Swedish']

const styles = StyleSheet.create({
    nationWrapper: {
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        maxHeight: 90,
    },

    nationLogoImg: {
        width: '80%',
        height: '80%',
    },

    nationLogoImgWrapper: {
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        display: 'flex',
        alignItems: 'center',
        width: 65,
        height: 65,
        borderRadius: 50,
    },

    nationName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginLeft: 5,
        flex: 1,
    },
})

export default Nation
