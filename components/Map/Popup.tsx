import React, { useRef, useEffect } from 'react'
import { Animated, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import NationInfo from '../Nations/NationInfo'

// TODO: Add correct type from SDK
interface Props {
    nation: any
    show: boolean
    setShow: (show: boolean) => void
}

const Popup: React.FC<Props> = ({ nation, show, setShow }) => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const popupHeight = 300
    const popupAnimation = useRef(new Animated.Value(popupHeight)).current

    const popin = () => {
        Animated.timing(popupAnimation, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start()
    }

    const popout = () => {
        Animated.timing(popupAnimation, {
            toValue: popupHeight,
            duration: 100,
            useNativeDriver: true,
        }).start()
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
                { backgroundColor: colors.background, transform: [{ translateY: popupAnimation }] },
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NationContent', { nation })}
                        style={[styles.nationOpenButton, { backgroundColor: colors.primary }]}
                    >
                        <Text style={styles.nationOpenButtonText}>Visa nation</Text>
                        <Ionicons name="arrow-forward-sharp" size={20} color="white" />
                    </TouchableOpacity>
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
        paddingVertical: 12,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    nationOpenButtonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
        marginRight: 5,
    },
})

export default Popup
