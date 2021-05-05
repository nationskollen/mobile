/**
 * Renders all the available nations in a list that
 * allows you to see more information about each nation.
 *
 * @category Nation
 * @module NationsPage
 */
import React from 'react'
import { FlatList } from 'react-native'
import { useTheme } from '../../ThemeContext'
import { useNations } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'

import ListEmpty from '../../List/ListEmpty'
import NationLogo from './NationLogo'
import ListButton from '../../List/ListButton'
import LoadingCircle from '../../Common/LoadingCircle'
import FocusAwareStatusBar from '../../Common/FocusAwareStatusBar'

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
                        onPress={() => navigation.navigate('NationHome', { oid: nation.oid })}
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
