//This file renders food related components

//Used to render various dropdown menus
import Dropdown from './Dropdown'
import { useTheme } from '../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// TODO: Fix types here
interface Props {
    oid: number
}

interface MenuItemListProps {
    category: string
}

// TODO: Remove
const foodCategories = ['Dryck', 'Förrätt', 'Huvudrätt', 'Efterrätt', 'Fika']

//TODO: replace with SDK function
const menu = {
    Dryck: [
        {
            name: 'Norrlands Guld',
            size: '50cl',
            price: '40',
            type: 'Fatöl',
            description: '',
            id: 'norrlandsguld',
        },
        {
            name: 'Gränges',
            size: '33cl',
            price: '30',
            type: 'burk',
            description: '',
            id: 'gränges',
        },
    ],

    Förrätt: [],

    Huvudrätt: [
        {
            name: 'Goa Pannkakor',
            description:
                'Oförståeligt befruktande smak. Once you go Goa Pannkakor you never go back.',
            ingredients: ['ägg', 'mjölk', 'mjöl', 'salt', 'smör', 'socker'],
            allergies: ['ägg', 'laktos', 'gluten', 'socker'],
            price: '45',
            image: '',
        },
        {
            name: 'Krispiga Quesadillas',
            description: '6 stycken krispiga, ostiga, kycklingfyllda och oförglömliga quesadillas',
            ingredients: ['kyckling', 'rödlök', 'ost', 'tortilla', 'majs', 'paprika'],
            allergies: ['rödlök', 'laktos', 'gluten'],
            price: '60',
            image: '',
        },
    ],
}

//renders entire dropdown menu with food content
//@ts-ignore
const Menu: React.FC<Props> = ({ oid }) => {
    const { colors } = useTheme()

    return (
        <Dropdown
            title={'Meny'}
            expandComponent={<Categories />}
            icon={<Ionicons name="md-fast-food-outline" size={28} color={colors.text} />}
        />
    )
}

//returns rendered food categories
const Categories: React.FC = () => {
    const { colors, isDarkMode } = useTheme()

    return (
        <View>
            {foodCategories.map((category) => (
                <Dropdown
                    key={category}
                    title={category}
                    icon={
                        <View
                            style={[
                                styles.foodCategoryIcon,
                                {
                                    backgroundColor: isDarkMode
                                        ? colors.primaryText
                                        : colors.primary,
                                },
                            ]}
                        />
                    }
                    expandComponent={<MenuItemList category={category} />}
                />
            ))}
        </View>
    )
}

//render all food or drink items from input category object
const MenuItemList: React.FC<MenuItemListProps> = ({ category }) => {
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

export default Menu
