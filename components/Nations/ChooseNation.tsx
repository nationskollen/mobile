// TODO: This can be merged with ../Settings/Nation.tsx
// This is for rendering the choose-nation view.
import React from 'react'
import { useTheme } from '../ThemeContext'
import { useNations } from '@dsp-krabby/sdk'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LogoCircle from './LogoCircle'

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
            <LogoCircle src={data.icon_img_src} size={50} />

            {/*Name of nation*/}
            <Text style={[styles.nationName, { color: colors.text }]}>{data.name}</Text>

            {/*Button for choosing nation*/}
            <TouchableOpacity
                onPress={() => navigation.navigate('NationContent', { nation: data })}
                style={[
                    styles.chooseButtonWrapper,
                    { backgroundColor: colors.backgroundHighlight },
                ]}
            >
                <Text style={[styles.chooseButton, { color: colors.text }]}>Välj</Text>
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
        borderRadius: 50,
    },

    nationLogoImgWrapper: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
    },

    nationName: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginLeft: 5,
    },

    chooseButtonWrapper: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    chooseButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
})

export default ChooseNation
