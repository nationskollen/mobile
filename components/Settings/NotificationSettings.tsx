import React from 'react'
import { FlatList } from 'react-native'
import { useNations } from '@dsp-krabby/sdk'

import Nation from './Nation'
import LoadingCircle from '../LoadingCircle'

/// Renders all nations in a list
const NotificationSettings = () => {
    const { data, isValidating, mutate } = useNations()

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Nation key={item.oid} data={item} />}
            keyExtractor={(item) => item.oid.toString()}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
        />
    )
}

export default NotificationSettings
