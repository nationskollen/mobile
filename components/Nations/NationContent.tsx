// This is for rendering the nation content.
import {
    ScrollView,
    SafeAreaView,
} from 'react-native'
import React from 'react'

/// Renders food components
import Menu from './Menu'
import NationInfo from './NationInfo'
/// Renders event components
// TODO: NOt sure what to do about this
// import Events from './NationContentComponents/EventComponents'

// TODO: Add correct type here
interface Props {
    route: any
}

const NationContent: React.FC<Props> = ({ route }) => {
    const { nation } = route.params

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NationInfo nation={nation} />
            {/*TODO: better solution for raising scrollable menu*/}
            <ScrollView style={{ flex: 1 }}>
                <Menu oid={nation.oid} />
                {/*<RenderEventsMenu nation={nation}></RenderEventsMenu>*/}
            </ScrollView>
        </SafeAreaView>
    )
}

export default NationContent
