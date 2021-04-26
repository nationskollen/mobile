/// This is the Home Screen
/// Renders the home screen and creates a stack to navigate between the different screens in the home page
import React from 'react'
import 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '../components/ThemeContext'
import { createStackNavigator } from '@react-navigation/stack'

import Map from '../components/Map/MapPage'
import NationContent from '../components/Nations/NationContent'
import { useTranslation } from '../translate/LanguageContext'
const Stack = createStackNavigator()

const MapScreen = ({ navigation }) => {
    const { colors } = useTheme()
    const { translate } = useTranslation()

    return (
        <Stack.Navigator initialRouteName="Map" screenOptions={HeaderOptions(colors)}>
            <Stack.Screen name="Map" options={{ title: translate.map.header}}>
                {(props) => <Map {...props} data={nationInfo} />}
            </Stack.Screen>
            <Stack.Screen
                name="NationContent"
                options={{
                    title: 'Nation',
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('Map')}
                            style={{ marginLeft: 15 }}
                        />
                    ),
                }}
            >
                {(props) => <NationContent {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export var nationInfo = [
    {
        id: 'norrlands',
        name: 'Norrlands Nation',
        nickname: 'Norrlands Nation',
        latitude: 59.856227,
        longitude: 17.6378425,
        logo: require('../img/png/norrlands/norrlandslogga.png'),
    },
    {
        id: 'vdala',
        name: 'Västmanlands-Dala Nation',
        latitude: 59.86032259136127,
        longitude: 17.628939051847695,
        nickname: 'V-Dala Nation',
        logo: require('../img/png/vdala/vdalalogga.png'),
    },
    {
        id: 'gotlands',
        name: 'Gotlands Nation',
        nickname: 'Gotlands Nation',
        latitude: 59.85978279670555,
        longitude: 17.634567704542953,
        logo: require('../img/png/gotlands/gotlandslogga.png'),
    },
    {
        id: 'snerikes',
        name: 'Södermanlands-Nerikes Nation',
        latitude: 59.8591482187301,
        longitude: 17.630697251271798,
        nickname: 'Snerikes Nation',
        logo: require('../img/png/snerikes/snerikeslogga.png'),
    },
    {
        id: 'kalmars',
        name: 'Kalmars Nation',
        nickname: 'Kalmars Nation',
        latitude: 59.859106565445636,
        longitude: 17.62706918384986,
        logo: require('../img/png/kalmars/kalmarslogga.png'),
    },
    {
        id: 'ostgotas',
        name: 'Östgöta Nation',
        latitude: 59.85521276094654,
        longitude: 17.637959775927737,
        nickname: 'ÖG-Nations',
        logo: require('../img/png/ostgotas/ostgotalogga.png'),
    },
    {
        id: 'smalands',
        name: 'Smålands Nation',
        latitude: 59.85929959538165,
        longitude: 17.63123586514085,
        nickname: 'Smålands Nation',
        logo: require('../img/png/smalands/smalandslogga.png'),
    },
    {
        id: 'stockholms',
        latitude: 59.856731614930446,
        longitude: 17.63419919045771,
        name: 'Stockholms Nation',
        nickname: 'Stocken',
        logo: require('../img/png/stockholms/stockholmslogga.png'),
    },
    {
        id: 'uplands',
        name: 'Uplands Nation',
        latitude: 59.85992220628584,
        longitude: 17.629458535888315,
        nickname: 'Uplands Nation',
        logo: require('../img/png/uplands/uplandslogga.png'),
    },
    {
        id: 'varmlands',
        name: 'Värmlands Nation',
        latitude: 59.85715355297,
        longitude: 17.633830648196177,
        nickname: 'Värmlands Nation',
        logo: require('../img/png/varmlands/varmlandslogga.png'),
    },
    {
        id: 'vastgotas',
        name: 'Västgötas Nation',
        nickname: 'Västgötas Nation',
        latitude: 59.85686289838122,
        longitude: 17.638651455173623,
        logo: require('../img/png/vastgotas/vastgotalogga.png'),
    },
    {
        id: 'goteborgs',
        name: 'Göteborgs Nation',
        latitude: 59.85957889713392,
        longitude: 17.63019280454616,
        nickname: 'Göteborgs Nation',
        logo: require('../img/png/goteborgs/goteborglogga.png'),
    },
    {
        id: 'ghs',
        name: 'Gästrike-Hälsinglands Nation',
        latitude: 59.85656549537542,
        longitude: 17.63670148804158,
        nickname: 'GH',
        logo: require('../img/png/ghs/ghlogga.png'),
    },
]

export default MapScreen
