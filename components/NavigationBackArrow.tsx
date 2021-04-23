import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    navigation: any
    screen: string
}

const NavigationBackArrow: React.FC<Props> = ({ navigation, screen }) => {
    return (
        <Ionicons
            name="arrow-back"
            size={28}
            color="white"
            onPress={() => navigation.navigate(screen)}
            style={{ marginLeft: 5, paddingLeft: 10, paddingRight: 10 }}
        />
    );
}

export default NavigationBackArrow
