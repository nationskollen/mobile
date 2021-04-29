/**
 * @category Home
 * @module ChooseNationButton
 */
import React, { useState } from 'react'
import PrimaryButton from '../PrimaryButton'

// Renders button that should show choose-nation content when pressed
const ChooseNationButton = ({ show, setShow }) => {
    return (
        <PrimaryButton
            label="Nation"
            icon="md-chevron-down"
            onPress={() => setShow(!show)}
            style={{ marginLeft: 10 }}
        />
    )
}

export default ChooseNationButton
