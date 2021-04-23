import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'

import Menu from './Menu'
import NationInfo from './NationInfo'
import ActivityLevel from '../Map/ActivityLevel'
import NationContentButton from './NationContentButton'


/// Renders event components
// TODO: NOt sure what to do about this
// import Events from './NationContentComponents/EventComponents'

// TODO: Add correct type here
interface Props {
    route: any
}

const NationContent: React.FC<Props> = ({ route }) => {
    // TODO: Pass in oid instead?
    const { nation } = route.params

    return (
        <View style={{ flex: 1 }}>
            <NationInfo nation={nation} />
            <ActivityLevel />
            <ScrollView style={{ flex: 1 }}>
                <Menu oid={nation.oid} />
                <EventButton oid={nation.oid} />
            </ScrollView>
        </View>
    )
}

const EventButton = ({ oid }) => {
    const navigation = useNavigation()
    const { colors } = useTheme()

    return (
        <NationContentButton
            title={'Evenemang'}
            pressFunc={() => navigation.navigate('Home', { oid: oid, hideNationFilter: true })}
            rightIcon={<Ionicons name='chevron-forward' size={24} color={colors.text} />}
            leftIcon={<Ionicons name='calendar-sharp' size={24} color={colors.text} />}
        />
    )
}

export default NationContent
