/**
 * This component styles the header in each page
 * @category Navigation
 * @module NavigationHeader
 */

import { ThemeColors } from '../components/ThemeContext'
import { StackNavigationOptions } from '@react-navigation/stack'

/**
 * Creates the default option object used by every screen with a navigation header.
 * This sets the correct color and alignment of the header.
 *
 * @param colors - The current theme colors
 */
export const HeaderOptions = (
    isDarkMode: boolean,
    colors: ThemeColors
): Partial<StackNavigationOptions> => ({
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: isDarkMode ? colors.background : colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    headerTitleStyle: {
        fontFamily: 'Roboto_700Bold',
        color: isDarkMode ? colors.textHighlight : 'white',
        fontSize: 20,
        flex: 1,
    },
    headerTitleAlign: 'left',
})
