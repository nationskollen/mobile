/// This is the home for nations
/// Renders start page for nations
import React from 'react'
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Platform,
    TextInput,
} from 'react-native'

import 'react-native-gesture-handler'
import { HeaderOptions } from './NavigationHeader'
import { useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/// Pages to move to and from
import ChooseNation from '../components/Nations/ChooseNation'
import NationContent from '../components/Nations/NationContent'

/// Icons
import { Ionicons } from "react-native-vector-icons/Ionicons";

/// Creates a local navigation stack for this tab
const Stack = createStackNavigator()

/// The screens included in the local stack
/// Put screens relating to nations here
function NationScreen({ navigation }) {
    const { colors } = useTheme()

    return (
        <Stack.Navigator
            initialRouteName="ChooseNation"
            screenOptions={{ headerShown: true, ...HeaderOptions(colors) }}
        >
            <Stack.Screen
                name="ChooseNation"
                options={{
                    title: 'Nationer',
                    headerShown: true,
                    ...HeaderOptions(colors),
                }}
            >
                {(props) => <ChooseNation {...props} nationList={nationListEx} />}
            </Stack.Screen>

            <Stack.Screen name="NationContent" options={{ title: "Nation",
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('ChooseNation')}
                            style={{marginLeft: 15}}
                        />
                    )
                }}>

                {(props) => <NationContent {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export var nationListEx = [
    {
        id: 'norrlands',
        name: 'Norrlands Nation',
        nickname: 'Norrlands Nation',
        logo: require('../img/png/norrlands/norrlandslogga.png'),
    },
    {
        id: 'vdala',
        name: 'Västmanlands-Dala Nation',
        nickname: 'V-Dala Nation',
        logo: require('../img/png/vdala/vdalalogga.png'),
    },
    {
        id: 'gotlands',
        name: 'Gotlands Nation',
        nickname: 'Gotlands Nation',
        logo: require('../img/png/gotlands/gotlandslogga.png'),
    },
    {
        id: 'snerikes',
        name: 'Södermanlands-Nerikes Nation',
        nickname: 'Snerikes Nation',
        logo: require('../img/png/snerikes/snerikeslogga.png'),
    },
    {
        id: 'kalmars',
        name: 'Kalmars Nation',
        nickname: 'Snerikes Nation',
        logo: require('../img/png/kalmars/kalmarslogga.png'),
    },
    {
        id: 'ostgotas',
        name: 'Östgöta Nation',
        nickname: 'ÖG-Nations',
        logo: require('../img/png/ostgotas/ostgotalogga.png'),
    },
    {
        id: 'smalands',
        name: 'Smålands Nation',
        nickname: 'Smålands Nation',
        logo: require('../img/png/smalands/smalandslogga.png'),
    },
    {
        id: 'stockholms',
        name: 'Stockholms Nation',
        nickname: 'Stocken',
        logo: require('../img/png/stockholms/stockholmslogga.png'),
    },
    {
        id: 'uplands',
        name: 'Uplands Nation',
        nickname: 'Uplands Nation',
        logo: require('../img/png/uplands/uplandslogga.png'),
    },
    {
        id: 'varmlands',
        name: 'Värmlands Nation',
        nickname: 'Värmlands Nation',
        logo: require('../img/png/varmlands/varmlandslogga.png'),
    },
    {
        id: 'vastgotas',
        name: 'Västgötas Nation',
        nickname: 'Västgötas Nation',
        logo: require('../img/png/vastgotas/vastgotalogga.png'),
    },
    {
        id: 'goteborgs',
        name: 'Göteborgs Nation',
        nickname: 'Göteborgs Nation',
        logo: require('../img/png/goteborgs/goteborglogga.png'),
    },
    {
        id: 'ghs',
        name: 'Gästrike-Hälsinglands Nation',
        nickname: 'GH',
        logo: require('../img/png/ghs/ghlogga.png'),
    },
]

export default NationScreen
