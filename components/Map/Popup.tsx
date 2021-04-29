/**
 * @category Map
 * @module Popup
 */
import React, { useRef, useEffect } from 'react'
import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native'

import { Nation } from '@dsp-krabby/sdk'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import PrimaryButton from '../PrimaryButton'
import NationInfo from '../Nations/NationInfo'
import { useTranslation } from '../../translate/LanguageContext'

export interface Props {
    nation: Nation
    show: boolean
    setShow: (show: boolean) => void
}

const Popup = ({ nation, show, setShow }: Props) => {
    const { colors } = useTheme()
    const { translate } = useTranslation()
    const navigation = useNavigation()
    const popupHeight = 300
    const popupAnimation = useRef(new Animated.Value(popupHeight)).current
    const popupAnimationOpacity = useRef(new Animated.Value(0)).current

    const popin = () => {
        Animated.parallel([
            Animated.timing(popupAnimation, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(popupAnimationOpacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start()
    }

    const popout = () => {
        Animated.parallel([
            Animated.timing(popupAnimation, {
                toValue: popupHeight,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(popupAnimationOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start()
    }

    // Re-render on prop change
    useEffect(() => {
        show ? popin() : popout()
    }, [show])

    // Fixes issue with border radius and border color.
    return (
        <Animated.View
            style={[
                styles.popup,
                {
                    backgroundColor: colors.background,
                    opacity: popupAnimationOpacity,
                    transform: [{ translateY: popupAnimation }],
                },
            ]}
        >
            <TouchableOpacity style={styles.closeButton} onPress={() => setShow(false)}>
                <Ionicons name="close-outline" size={24} color={colors.text} />
            </TouchableOpacity>
            {nation && (
                <View style={styles.container}>
                    <NationInfo
                        nation={nation}
                        backgroundColor={colors.background}
                        paddingTop={15}
                    />
                    <PrimaryButton
                        onPress={() => navigation.navigate('NationHome', { nation })}
                        label={translate.map.popup.shownation}
                        icon="chevron-forward"
                        style={styles.nationOpenButton}
                    />
                </View>
            )}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        zIndex: 100,
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
        elevation: 15,
    },

    closeButton: {
        position: 'absolute',
        zIndex: 2,
        right: 0,
        top: 0,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    nationOpenButton: {
        marginHorizontal: 20,
        marginBottom: 20,
        flex: 1,
    },
})

export default Popup
