/**
 * Renders button that reveals filter options
 * @category Home
 * @module ChooseNationButton
 */
import React, { useState } from 'react'
import Button from '../Common/Button'
import { useSheet } from './SheetContext'

const ChooseNationButton = () => {
    const { sheetRef, show, setShow } = useSheet()

    const handlePress = () => {
        show ? sheetRef.current.snapTo(1) : sheetRef.current.snapTo(0)
        //setShow(!show)
    }

    //console.log(sheetRef.current)
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
