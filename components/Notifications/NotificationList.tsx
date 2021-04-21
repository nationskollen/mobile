import React from 'react'
import { FlatList } from 'react-native'
import { useNations } from '@dsp-krabby/sdk'

import Post from './Post'
import LoadingCircle from '../LoadingCircle'

// TODO: Currently, this renders nations as notifications since we
//       do not have implemented notifications on the server yet.
//       However, this allows us to the the reload functionality.
const NotificationsContent: React.FC = () => {
    const { data, isValidating, mutate } = useNations()

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Post data={item} />}
            keyExtractor={(item) => item.name}
            refreshControl={<LoadingCircle validating={isValidating} mutate={mutate} />}
        />
    )
}

export default NotificationsContent
