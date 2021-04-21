import React from 'react'
import 'react-native-gesture-handler'
import { useNations } from '@dsp-krabby/sdk'
import { ScrollView } from 'react-native-gesture-handler'

import Nation from './Nation'

/// Renders all nations in a list
const NotificationSettings = () => {
    const { data } = useNations()

    return (
        <ScrollView>
            {data && data.map((nation) => <Nation key={nation.oid} data={nation} />)}
        </ScrollView>
    )
}

export default NotificationSettings
