/**
 * Renders the available menus for a location as a dropdown.
 *
 * @category Nations
 * @module Menus
 */
import React from 'react'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { useMenus, Location, Nation } from '@dsp-krabby/sdk'

import Dropdown from '../Dropdown'
import ListButton from '../ListButton'

export interface Props {
    nation: Nation
    location: Location
}

const Menus = ({ nation, location }: Props) => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const { data: menus } = useMenus(location.id)

    return (
        <Dropdown
            title={location.name}
            icon={<Ionicons name="location-outline" size={24} color={colors.text} />}
            expandedOnMount={true}
        >
            {menus &&
                menus.map((menu) => {
                    // Skip rendering of menu if it is marked as hidden on the server
                    if (menu.hidden) {
                        return null
                    }

                    return (
                        <ListButton
                            key={menu.id}
                            title={menu.name}
                            leftIcon={
                                <Ionicons
                                    name="md-fast-food-outline"
                                    size={24}
                                    color={colors.text}
                                />
                            }
                            onPress={() =>
                                navigation.navigate('NationMenu', { nation, menuId: menu.id })
                            }
                        />
                    )
                })}
        </Dropdown>
    )
}

export default Menus
