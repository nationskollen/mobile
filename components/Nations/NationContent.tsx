// This is for rendering the nation content.
import { ScrollView, View } from 'react-native'
import React from 'react'

/// Renders food components
import Menu from './Menu'
import NationInfo from './NationInfo'
import ActivityLevel from '../Map/ActivityLevel'
import NationContentButton from './NationContentButton'

import { useNavigation } from '@react-navigation/core'
import { useTheme } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import ChooseNation from './ChooseNation'

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
            pressFunc={() => navigation.navigate('Home', { oid: oid })}
            rightIcon={<Ionicons name="arrow-forward-circle-outline" size={32} color="black" />}
            leftIcon={<AntDesign name="calendar" size={24} color={colors.text} />}
        />
    )
}

export default NationContent
