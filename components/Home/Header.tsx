import React from 'react'
import { useTheme } from '../ThemeContext'
import { StyleSheet, Text, View, Image } from 'react-native'
import NK_LOGO from '../../assets/nationskollen_logo-do_not_change.png'

const Header = () => {
    const { colors } = useTheme()

    return (
        <View style={headerStyles.headerWrapper}>
            <Text style={[headerStyles.headerTitle, { color: colors.text }]}>Nationskollen</Text>
            {/*THE PRETTIEST LOGO YOU WILL EVER SEE*/}
            <Image
                source={NK_LOGO}
                style={[headerStyles.logo, { backgroundColor: colors.backgroundExtra }]}
            />
        </View>
    )
}

const headerStyles = StyleSheet.create({
    headerWrapper: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        marginLeft: 6,
        width: '15%',
        height: '70%',
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '4%',
    },
})

export default Header
