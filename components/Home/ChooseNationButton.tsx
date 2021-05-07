/**
 * Renders button that reveals filter options
 * @category Home
 * @module ChooseNationButton
 */
import React, { useState } from 'react'
import Button from '../Common/Button'
import { useSheet } from './SheetContext'

const ChooseNationButton = () => {
    const { sheetRef } = useSheet()

    const handlePress = () => {
        sheetRef.current.snapTo(1)
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

export default ChooseNationButton
