/**
 * This components shown the nations in a scrollable list
 * @category Nation
 * @module ListOfNations
 * @returns A scrollable list of all nations
 */
// TODO: This can be merged with ../Settings/Nation.tsx
// This is for rendering the choose-nation view.
import React from 'react'
import { useTheme } from '../ThemeContext'
import { useNations } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'

import ListEmpty from '../ListEmpty'
import NationLogo from './NationLogo'
import LoadingCircle from '../LoadingCircle'


const ChooseNation: React.FC = () => {
    const { colors } = useTheme()
    const navigation = useNavigation()
    const { data, error, isValidating, mutate } = useNations()

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                    key={item.oid}
                    onPress={() => navigation.navigate('NationContent', { nation: item })}
                    style={[styles.wrapper, { borderColor: colors.backgroundExtra }]}
                >
                    <NationLogo src={item.icon_img_src} size={50} />
                    <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
            ListEmptyComponent={() =>
                ListEmpty({
                    error,
                    loading: isValidating,
                    message: 'Inga nationer',
                })
            }
        />
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        maxHeight: 90,
    },

    name: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginLeft: 5,
    },
})

export default ChooseNation
