/**
 * @category Home
 * @module ChooseNationButton
 */
import React from 'react'
import PrimaryButton from '../PrimaryButton'

// Renders button that should show choose-nation content when pressed
const ChooseNationButton = () => {
    const handleNationButtonPress = () => {
        console.log('nation button pressed - show choose nation content')
    }

    return (
        <PrimaryButton
            label="Nation"
            icon="md-chevron-down"
            onPress={handleNationButtonPress}
            style={{ marginLeft: 10 }}
        />
    )
}

export default ChooseNationButton
