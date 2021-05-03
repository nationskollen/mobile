/**
 * Renders a simple card with a dropshadow/elevation.
 *
 * @category Common
 * @module Card
 */
import React from 'react'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useTheme } from './ThemeContext'

export interface Props {
    onPress?: () => void
    children: Element | Element[]
}

const Card = ({ children, onPress }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const content = (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? colors.backgroundExtra : colors.background },
            ]}
        >
            {children}
        </View>
    )

    if (onPress) {
        return <TouchableWithoutFeedback onPress={onPress}>{content}</TouchableWithoutFeedback>
    }

    return content
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 10,
        overflow: 'hidden',

        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
})

export default Card
