import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'

const Bottomsheet = ({ children }) => {
    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 10,
                height: 450,
            }}
        >
            {children}
        </View>
    )

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )

    const sheetRef = React.useRef(null)

    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'papayawhip',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button title="Open Bottom Sheet" onPress={() => sheetRef.current.snapTo(0)} />
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[30, 100, 450]}
                initialSnap={1}
                borderRadius={0}
                renderContent={renderContent}
                renderHeader={renderHeader}
                enabledContentTapInteraction={false}
                //enabledGestureInteraction={true}
            />
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOffset: { width: -2, height: -6 },
        paddingTop: 15,
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
