import React from 'react'
import { useTheme } from '../ThemeContext'
import { View, StyleSheet } from 'react-native'

import NationInfo from '../Nations/NationInfo'

// TODO: Add correct type from SDK
interface Props {
    nation: any
}

const Popup: React.FC<Props> = ({ nation }) => {
    const { colors } = useTheme()

    //TODO: add openinghours and address to nation object
    return (
        <View style={styles.popup}>
            <NationInfo nation={nation} backgroundColor={colors.background} />
        </View>
    )
}

const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
})

export default Popup
