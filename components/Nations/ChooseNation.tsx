/**
 * This component renders the nations in a scrollable list.
 * @category Nation
 * @module ListOfNations
 * @returns A scrollable list of all nations
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useNations } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'

import ListEmpty from '../ListEmpty'
import NationLogo from './NationLogo'
import ListButton from '../ListButton'
import LoadingCircle from '../LoadingCircle'

const ChooseNation = () => {
    const navigation = useNavigation()
    const { data, error, isValidating, mutate } = useNations()

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <ListButton
                    title={item.name}
                    onPress={() => navigation.navigate('NationContent', { nation: item })}
                    leftIcon={<NationLogo src={item.icon_img_src} />}
                />
            )}
            keyExtractor={(item) => item.oid.toString()}
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

export default ChooseNation
