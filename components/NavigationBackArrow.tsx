/**
 * @category Navigation
 * @module NavigationBackArrow
 */
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from './HeaderButton'

const NavigationBackArrow = () => {
    const navigation = useNavigation()

    return (
        <HeaderButton
            onPress={navigation.goBack}
            icon="arrow-back"
            iconSize={26}
            isLeft={true}
        />
    )
}

export default NavigationBackArrow
