// This is for rendering the nation content.
import { ScrollView, View } from 'react-native'
import React from 'react'

/// Renders food components
import Menu from './Menu'
import NationInfo from './NationInfo'
import ActivityLevel from '../Map/ActivityLevel'

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
        <View>
            <NationInfo nation={nation} />
            <ActivityLevel />
            <Menu oid={nation.oid} />
        </View>
    )
}

export default NationContent
