import React from 'react'
import { useTheme } from '../ThemeContext'
import { View, StyleSheet } from 'react-native'

import NationInfo from '../Nations/NationInfo'

// TODO: Add correct type from SDK
interface Props {
    nation: any
}

const Popup: React.FC<Props> = ({ nation }) => {
    const { colors, isDarkMode } = useTheme()

    // Fixes issue with border radius and border color.
    const popupStyles = isDarkMode
        ? [
              styles.popup,
              {
                  borderTopWidth: 1,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderColor: colors.backgroundHighlight,
              },
          ]
        : [styles.popup]

    //TODO: add openinghours and address to nation object
    return (
        <View style={popupStyles}>
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        elevation: 15,
    },
})

export default Popup
