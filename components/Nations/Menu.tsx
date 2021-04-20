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
            description:
                '6 stycken krispiga, ostiga, kycklingfyllda och oförglömliga quesadillas',
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
    const { colors } = useTheme()

    return (
        <View>
            {foodCategories.map((category) => (
                <Dropdown
                    key={category}
                    title={category}
                    icon={<View style={[styles.foodCategoryIcon, { backgroundColor: colors.primary }]} />}
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
        <View>
            {menu[category].map((item: any) => {
                <View
                    key={item.name}
                    style={[styles.itemBorder, { borderColor: colors.backgroundExtra }]}
                >
                    <View style={styles.itemWrapper}>
                        <Text style={[styles.nameText, { color: colors.text }]}>{item.name}</Text>
                        <Text style={[styles.descriptionText, { color: colors.text }]}>
                            {category == 'Dryck' ? item.size + ', ' + item.type : item.description}
                        </Text>
                        <View
                            style={[styles.priceWrapper, { backgroundColor: colors.backgroundExtra }]}
                        >
                            <Text style={[styles.priceText, { color: colors.text }]}>
                                {item.price + ' kr'}
                            </Text>
                        </View>
                    </View>
                </View>
            })}
        </View>
    )
}

//styles for food/drink list
const styles = StyleSheet.create({
    itemBorder: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },

    itemWrapper: {
        marginLeft: '7%',
        marginTop: '2%',
    },

    nameText: {
        marginVertical: 3,
        fontWeight: 'bold',
        fontSize: 16,
    },

    descriptionText: {
        marginTop: 3,
        marginBottom: 10,
        maxWidth: '70%',
    },

    priceWrapper: {
        backgroundColor: 'lightgreen',
        position: 'absolute',
        right: '5%',
        top: '35%',
        width: 45,
        height: 25,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    priceText: {
        color: 'black',
        fontSize: 15,
    },

    foodCategoryIcon: {
        marginLeft: '15%',
    },
})

export default Menu
