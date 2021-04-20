import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

function handleNationButtonPress() {
    console.log('nation button pressed - show choose nation content')
}

//renders button that should sho choose-nation content when pressed
const ChooseNationButton = () => {
    return (
        <TouchableOpacity onPress={handleNationButtonPress}>
            <View style={styles.nationButton}>
                <Text style={styles.nationButtonText}>Nation</Text>
                <Ionicons name='md-chevron-down' size={20} color='white' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    nationButton: {
        height: 50,
        width: 100,
        backgroundColor: '#71002E',
        marginHorizontal: '6%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    nationButtonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
        marginHorizontal: 5,
    },
})

export default ChooseNationButton
