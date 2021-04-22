/**
 * This component styles the header in each page
 * @category Navigation
 * @module NavigationHeader
 */

import { ThemeColors } from '../components/ThemeContext'
import { StackNavigationOptions } from '@react-navigation/stack'

export const HeaderOptions: (colors: ThemeColors) => Partial<StackNavigationOptions> = (
    colors: ThemeColors
) => ({
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: colors.primary,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        flex: 1,
    },
    headerTitleAlign: 'left',
})
