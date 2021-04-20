import React, { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { View, StyleSheet, Text } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

interface ToggleProps {
    // `text` is the name/title of the toggle
    text: string
}

/// Renders the different notification options
const NotificationOptions: React.FC = () => {
    const { colors } = useTheme()

    return (
        <View
            style={[
                styles.options,
                {
                    borderBottomColor: colors.border,
                },
            ]}
        >
            {/*Temporary options*/}
            <Toggle text='Prenumerera' />
            <Toggle text='Push notifikationer' />
            <Toggle text='Events' />
            <Toggle text='Nyheter' />
        </View>
    )
}

/// Renders toggle switches
const Toggle: React.FC<ToggleProps> = ({ text }) => {
    const { colors } = useTheme()
    const [toggle, setToggle] = useState(false)

    return (
        <View style={styles.switch}>
            <Text style={{ color: colors.text }}>{text}</Text>
            <ToggleSwitch
                isOn={toggle}
                onColor="#05c46b"
                offColor="grey"
                size="large"
                onToggle={() => setToggle(!toggle)}
            />
        </View>
    )
}


/// Styles for option switches
const styles = StyleSheet.create({
    options: {
        justifyContent: 'space-evenly',
        height: 200,
        borderBottomWidth: 1,
    },

    switch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
    },
})

export default NotificationOptions
