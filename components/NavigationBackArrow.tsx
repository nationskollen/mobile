/**
 * @category Navigation
 * @module NavigationBackArrow
 */
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NavigationBackArrow = () => {
    const navigation = useNavigation()

    return (
        <TouchableHighlight
            onPress={navigation.goBack}
            underlayColor="rgba(255, 255, 255, 0.15)"
            style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableHighlight>
    )
}

export default NavigationBackArrow
