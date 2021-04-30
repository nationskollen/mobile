/**
 * This component renders the nations in a scrollable list.
 * @category Nation
 * @module ListOfNations
 * @returns A scrollable list of all nations
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useTheme } from '../ThemeContext'
import { useNations } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'

import ListEmpty from '../ListEmpty'
import NationLogo from './NationLogo'
import ListButton from '../ListButton'
import LoadingCircle from '../LoadingCircle'
import FocusAwareStatusBar from '../FocusAwareStatusBar'

const NationsPage = () => {
    const navigation = useNavigation()
    const { colors } = useTheme()
    const { data, error, isValidating, mutate } = useNations()

    return (
        <>
            <FocusAwareStatusBar backgroundColor={colors.primary} />
            <FlatList
                data={data}
                renderItem={({ item: nation }) => (
                    <ListButton
                        title={nation.name}
                        onPress={() => navigation.navigate('NationHome', { nation })}
                        leftIcon={<NationLogo src={nation.icon_img_src} />}
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
        </>
    )
}

export default NationsPage
