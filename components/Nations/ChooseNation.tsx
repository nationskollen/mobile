// TODO: This can be merged with ../Settings/Nation.tsx
// This is for rendering the choose-nation view.
import React from 'react'
import { useTheme } from '../ThemeContext'
import { useNations } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

// TODO: Repalce with SDK type for nation
interface NationProps {
    data: any
}

const ChooseNation: React.FC = () => {
    const { data } = useNations()

    /*TODO: Scroll does not seem to be working on android? (only ios)*/
    // TODO: Use flatlist
    return (
        <ScrollView>
            {data && data.map((nation) => <Nation key={nation.oid} data={nation} />)}
        </ScrollView>
    )
}

//Returns component for given nation
const Nation: React.FC<NationProps> = ({ data }) => {
    const { colors } = useTheme()
    const navigation = useNavigation()

    return (
        <View key={data.id} style={[styles.nationWrapper, { borderColor: colors.backgroundExtra }]}>
            {/*Logo of nation*/}
            <View
                style={[
                    styles.nationLogoImgWrapper,
                    { backgroundColor: colors.backgroundExtra },
                ]}
            >
                <Image source={{ uri: data.icon_img_src }} style={styles.nationLogoImg} />
            </View>

            {/*Name of nation*/}
            <View style={styles.nationNameWrapper}>
                <Text style={[styles.nationName, { color: colors.text }]}>{data.name}</Text>
            </View>

            {/*Button for choosing nation*/}
            <TouchableOpacity
                onPress={() => navigation.navigate('NationContent', { nation: data })}
                style={styles.chooseButtonWrapper}
            >
                <Text style={styles.chooseButton}>Välj</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        height: 40,
        backgroundColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },

    headerTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: '5%',
        paddingBottom: '3%',
    },

    cross: {
        position: 'absolute',
        right: '4%',
        alignSelf: 'center',
        width: 30,
        height: 30,
    },

    nationWrapper: {
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        maxHeight: 90,
    },

    nationLogoImg: {
        width: '80%',
        height: '80%',
    },

    nationLogoImgWrapper: {
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        display: 'flex',
        alignItems: 'center',
        width: 65,
        height: 65,
        borderRadius: 50,
    },

    nationNameWrapper: {
        height: '100%',
        justifyContent: 'center',
        flex: 1,
    },

    nationName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        paddingLeft: '5%',
    },

    chooseButtonWrapper: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: '#E8E8E8',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    chooseButton: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
})

export default ChooseNation
