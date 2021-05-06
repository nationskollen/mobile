import React, { useCallback, useMemo, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const Bottomsheet = ({ children }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null)

    // variables
    const snapPoints = useMemo(() => ['25%', '100%'], [])

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index)
    }, [])

    // renders
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>{children}</View>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})

export default Bottomsheet
