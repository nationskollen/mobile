import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import { useSheet } from './SheetContext'
import { useTheme } from '../ThemeContext'

const Bottomsheet = ({ children }) => {
    const { sheetRef } = useSheet()
    const { colors } = useTheme()

    const renderContent = () => (
        <View
            style={{
                backgroundColor: colors.background,
                padding: 10,
                height: 450,
            }}
        >
            {children}
        </View>
    )

    const renderHeader = () => (
        <View style={[styles.header, { backgroundColor: colors.background }]}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )

    return (
        <>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 100, 25]}
                initialSnap={0}
                borderRadius={0}
                renderContent={renderContent}
                renderHeader={renderHeader}
                enabledContentTapInteraction={false} // for android to interact with content
                enabledGestureInteraction={true}
            ></BottomSheet>
        </>
    )
}

const styles = StyleSheet.create({
    sheetContainer: {
        zIndex: 50,
        elevation: 50,
    },

    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#EEEEEE',
        shadowOffset: { width: -2, height: -6 },
        paddingTop: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    panelHeader: {
        alignItems: 'center',
    },

    panelHandle: {
        width: 50,
        height: 5,
        borderRadius: 4,
        backgroundColor: 'lightgray',
    },
})

export default Bottomsheet