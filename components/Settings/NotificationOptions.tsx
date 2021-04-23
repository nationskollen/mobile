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
        <View style={styles.options}>
            {/*Temporary options*/}
            <Toggle text="Push notifikationer" />
            <Toggle text="Events" />
            <Toggle text="Nyheter" />
        </View>
    )
}

/// Renders toggle switches
const Toggle: React.FC<ToggleProps> = ({ text }) => {
    const { colors } = useTheme()
    const [toggle, setToggle] = useState(false)

    return (
        <View style={[styles.switch, { borderBottomColor: colors.border }]}>
            <View style={styles.leftContainer}>
                <View style={[styles.dot, { backgroundColor: colors.primaryText }]} />
                <Text style={[styles.option, { color: colors.text }]}>{text}</Text>
            </View>
            <ToggleSwitch
                isOn={toggle}
                onColor="#05c46b"
                offColor={colors.borderDark}
                size="large"
                onToggle={() => setToggle(!toggle)}
            />
        </View>
    )
}

/// Styles for option switches
const styles = StyleSheet.create({
    options: {
        flexDirection: 'column',
    },

    option: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 15,
        marginLeft: 5,
    },

    switch: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
})

export default NotificationOptions
