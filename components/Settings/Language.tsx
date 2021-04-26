import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'

import LogoCircle from '../Nations/LogoCircle'
import NotificationOptions from './NotificationOptions'
import { useTranslation } from '../../translate/LanguageContext';


export const Language = ({ data, onLanguageClicked}) => {
    const { colors } = useTheme()
    const {setSelectedLanguage } = useTranslation();

    const onPressedLanguage= (clickedLanguage: any) => {
	setSelectedLanguage(clickedLanguage)	
    }

    return (
	<View> 
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
		    <Text style={[styles.nationName, { color: colors.text }]}

              onPress={() => onPressedLanguage(onLanguageClicked)}
		    >{data}
		    </Text>
               </View>
        </View>
    )
}

export const AvailableLanguages = ['English', 'Svenska']
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


