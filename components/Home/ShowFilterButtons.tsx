/**
 * Renders button that reveals bottom sheet with filter options when pressed
 * @category Home
 * @module ChooseNationButton
 */
import React from 'react'
import Button from '../Common/Button'
import { useSheet } from './SheetContext'

const ShowFilterButtons = () => {
    const { sheetRef, show, setShow } = useSheet()

    const handlePress = () => {
        show ? sheetRef.current.snapTo(1) : sheetRef.current.snapTo(0)
    }

    return (
        <Button
            type="primary"
            icon="filter-outline"
            onPress={handlePress}
            style={{ marginLeft: 10 }}
        />
    )
}

export default ShowFilterButtons
