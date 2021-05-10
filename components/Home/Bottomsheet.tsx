import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { useSheet } from './SheetContext'
import { useTheme } from '../ThemeContext'

const Bottomsheet = ({ children }) => {
    const { show, setShow, sheetRef } = useSheet()
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
        <View
            style={[
                styles.header,
                { backgroundColor: colors.background },
                show && styles.headerShadows,
            ]}
        >
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )

    return (
        <>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 25]}
                initialSnap={1}
                borderRadius={0}
                renderContent={renderContent}
                renderHeader={renderHeader}
                enabledContentTapInteraction={false} // for android to interact with content
                onOpenStart={() => setShow(!show)}
                onCloseStart={() => setShow(!show)}
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
        paddingTop: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    headerShadows: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -6,
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        zIndex: 2,
        elevation: 2,
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
