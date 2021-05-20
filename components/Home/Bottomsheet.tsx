import React, { useState } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { useSheet } from './SheetContext'
import { useTheme } from '../ThemeContext'

const Bottomsheet = ({ children }) => {
    const { show, setShow, sheetRef } = useSheet()
    const { colors, isDarkMode } = useTheme()

    // states for preventing false show value when sheet is not dragged fully.
    const [open, setOpen] = useState(false)
    const [close, setClose] = useState(false)

    const renderContent = () => (
        <View
            style={[
                styles.content,
                { backgroundColor: isDarkMode ? colors.backgroundHighlight : colors.background },
                styles.headerShadows,
            ]}
        >
            {children}
        </View>
    )

    const renderHeader = () => (
        <View style={styles.panelHeader}>
            <View style={styles.panelHandle}></View>
        </View>
    )

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={[450, 12]}
            initialSnap={1}
            borderRadius={0}
            renderContent={renderContent}
            renderHeader={renderHeader}
            enabledContentTapInteraction={false} // for android to interact with content
            onOpenStart={() => {
                setOpen(true)
                setClose(false)
            }}
            onCloseStart={() => {
                setClose(true)
                setOpen(false)
            }}
            onOpenEnd={() => {
                if (!close) {
                    setOpen(false)
                    setShow(!show)
                }
            }}
            onCloseEnd={() => {
                if (!open) {
                    setClose(false)
                    setShow(!show)
                }
            }}
            enabledGestureInteraction={true}
        ></BottomSheet>
    )
}

const styles = StyleSheet.create({
    content: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        height: 450,
    },

    headerShadows: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        zIndex: 10,
    },

    panelHeader: {
        alignItems: 'center',
        height: 15,
    },

    panelHandle: {
        width: 60,
        height: 6,
        borderRadius: 4,
        marginBottom: 7,
        backgroundColor: 'gray',
    },
})

export default Bottomsheet
