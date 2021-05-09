/**
 * Renders the available menus for a location as a dropdown.
 *
 * @category Nations
 * @module Menus
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { useMenus, Location, Nation } from '@nationskollen/sdk'

import Card from '../../Common/Card'
import Title from '../../Common/Title'
import CoverImage from '../../Common/CoverImage'
import ContentContainer from '../../Common/ContentContainer'

export interface Props {
    nation: Nation
    location: Location
}

const Menus = ({ nation, location }: Props) => {
    const { colors, isDarkMode } = useTheme()
    const navigation = useNavigation()
    const { data: menus } = useMenus(location.id)
    const hasItems = menus && menus.length > 0

    if (!menus || menus.length === 0) {
        return null
    }

    return (
        <View style={{ marginTop: 15, marginBottom: 15 }}>
            <View style={{ paddingHorizontal: 15 }}>
                <View style={styles.headerContainer}>
                    <Title label={location.name} noMargin={true} />
                    <Text style={{ color: colors.text }}>{menus.length + ' st'}</Text>
                </View>
                {!hasItems && <Text style={{ color: colors.text }}>Inga menyer</Text>}
            </View>
            {hasItems &&
                menus.map((menu) => {
                    // Skip rendering of menu if it is marked as hidden on the server
                    if (menu.hidden) {
                        return null
                    }

                    return (
                        <Card
                            key={menu.id}
                            onPress={() =>
                                navigation.navigate('NationMenu', { nation, menuId: menu.id })
                            }
                        >
                            <CoverImage
                                src={menu.cover_img_src}
                                height={175}
                                hideFallbackIcon={true}
                                textOverlayColor={nation.accent_color}
                                backgroundColor={
                                    isDarkMode ? colors.backgroundHighlight : colors.background
                                }
                            />
                            <View style={styles.iconContainer}>
                                <Ionicons
                                    name="chevron-forward"
                                    color={menu.cover_img_src ? 'white' : colors.textHighlight}
                                    size={20}
                                />
                            </View>
                            <ContentContainer style={styles.overlay}>
                                <Title
                                    size="large"
                                    label={menu.name}
                                    color={menu.cover_img_src ? 'white' : colors.textHighlight}
                                    noMargin={true}
                                />
                            </ContentContainer>
                        </Card>
                    )
                })}
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    overlay: {
        position: 'absolute',
        bottom: 3,
        left: 3,
    },

    iconContainer: {
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
})

export default Menus
