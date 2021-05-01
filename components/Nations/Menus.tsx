/**
 * This component renders a menu and shows it using {@link Dropdown}.
 * @category Nation
 * @module Menu
 * @param oid
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from '../../translate/LanguageContext'
import { useMenus, Location, MenuItemCollection } from '@dsp-krabby/sdk'

import Dropdown from '../Dropdown'

export interface Props {
    location: Location
}

export interface MenuItemProps {
    items: MenuItemCollection
}

const Menus = ({ location }: Props) => {
    const { colors } = useTheme()
    const { data: menus } = useMenus(location.id)

    return (
        <Dropdown
            title={location.name}
            icon={<Ionicons name="location-outline" size={24} color={colors.text} />}
        >
            {menus &&
                menus.map((menu) => {
                    // Skip rendering of menu if it is marked as hidden on the server
                    if (menu.hidden) {
                        return null
                    }

                    return (
                        <Dropdown
                            key={menu.id}
                            title={menu.name}
                            icon={
                                <Ionicons
                                    name="md-fast-food-outline"
                                    size={24}
                                    color={colors.text}
                                />
                            }
                        >
                            <MenuItems items={menu.items} />
                        </Dropdown>
                    )
                })}
        </Dropdown>
    )
}

//render all food or drink items from input category object
const MenuItems = ({ items }: MenuItemProps) => {
    const { colors } = useTheme()

    return (
        <View style={{ flex: 1 }}>
            {menu[category] &&
                menu[category].map((item: any) => (
                    <View
                        key={item.name}
                        style={[styles.item, { borderColor: colors.backgroundExtra }]}
                    >
                        <View style={styles.itemText}>
                            <Text style={[styles.nameText, { color: colors.text }]}>
                                {item.name}
                            </Text>
                            <Text style={{ color: colors.text }}>
                                {category == 'Dryck'
                                    ? item.size + ', ' + item.type
                                    : item.description}
                            </Text>
                        </View>
                        <Text style={[styles.priceText, { color: colors.errorText }]}>
                            {item.price + ' kr'}
                        </Text>
                    </View>
                ))}
        </View>
    )
}

//styles for food/drink list
const styles = StyleSheet.create({
    item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 25,
    },

    itemText: {
        flex: 1,
        marginRight: 15,
    },

    nameText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3,
    },

    priceWrapper: {
        backgroundColor: 'lightgreen',
        width: 45,
        height: 25,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    foodCategoryIcon: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginLeft: 2,
    },
})

export default Menus
