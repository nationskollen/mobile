// This is for rendering the nation content.
import React from 'react'
import { TabStackParamList } from '../Footer'
import { ScrollView, View } from 'react-native'
import { RouteProp } from '@react-navigation/native';

import Menu from './Menu'
import NationInfo from './NationInfo'
import ActivityLevel from '../Map/ActivityLevel'

export interface Props {
    route: RouteProp<TabStackParamList, 'Nationer'>
}

const NationContent = ({ route }: Props) => {
    const { nation } = route.params

    return (
        <View style={{ flex: 1 }}>
            <NationInfo nation={nation} />
            <ActivityLevel />
            <ScrollView style={{ flex: 1 }}>
                <Menu oid={nation.oid} />
            </ScrollView>
        </View>
    )
}

export default NationContent
