import { View, SafeAreaView, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

interface Props {
    logo: string
}

//renders top header to screen
const Header: React.FC<Props> = ({ logo }) => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.header}>
            {/*Left Arrow for going back*/}
            <View style={styles.arrowBack}>
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color="black"
                    onPress={() => navigation.goBack()}
                />
            </View>

            {/*nation logo as header*/}
        </SafeAreaView>
    )
}

//styles for header
const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch', // 100% width
        height: 50,
        backgroundColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        justifyContent: 'center',
    },

    arrowBack: {
        marginLeft: 10,
        width: 30,
        height: 25,
    },

    logoWrapper: {
        // alignSelf: "flex-end",
        marginLeft: '5%',
        //position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    logo: {
        width: '100%',
        height: '100%',
    },
})

export default Header
