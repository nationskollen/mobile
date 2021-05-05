/**
 * @category Home
 * @module ChooseNationButton
 */
import React from 'react'
import Button from '../Common/Button'

// Renders button that should show choose-nation content when pressed
const ChooseNationButton = () => {
    const handleNationButtonPress = () => {
        console.log('nation button pressed - show choose nation content')
    }

    return (
        <Button
            type="primary"
            label="Nation"
            icon="md-chevron-down"
            onPress={handleNationButtonPress}
            style={{ marginLeft: 10 }}
        />
    )
}

export default ChooseNationButton
