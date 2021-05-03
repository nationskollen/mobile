/**
 * @category Home
 * @module ChooseNationButton
 */
import React from 'react'
import Button from '../Button'

// Renders button that should show choose-nation content when pressed
const ChooseNationButton = ({ show, setShow }) => {
    return (
        <Button
            type="primary"
            icon="filter-outline"
            onPress={() => setShow(!show)}
            style={{ marginLeft: 10 }}
        />
    )
}

export default ChooseNationButton
