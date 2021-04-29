/**
 * @category Navigation
 * @module NavigationBackArrow
 */
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const NavigationBackArrow = () => {
    const navigation = useNavigation()

    return (
        <Ionicons
            name="arrow-back"
            size={28}
            color="white"
            onPress={navigation.goBack}
            style={{ marginLeft: 5, paddingLeft: 10, paddingRight: 40 }}
        />
    )
}

export default NavigationBackArrow
