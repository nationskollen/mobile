// This is for rendering the nation content. 
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import App from '../../App.js';

export default function NationContent({nation}) {


    return (
        <SafeAreaView>
            <RenderHeader logo={nation.logo}></RenderHeader>
            <RenderNationInfo nation={nation}></RenderNationInfo>
        </SafeAreaView>
    )
}

function RenderHeader(logo){
    //temporary hardcoded test logo
    //will be replace with input from logo prop
    let testLogo = '../../img/png/vdala/vdalalogga.png'

    return (
        <SafeAreaView style={styles.header}>
            {/*left arrow for going back*/}
            <View style={styles.arrowBack}>
                <Ionicons name="arrow-back" size={24} color="black" onPress={()=>Alert.alert("(back arrow) was pressed")}/>
            </View>

            {/*nation logo as header*/}
            <View style={styles.logoWrapper}>

            </View>
        </SafeAreaView>
    )
}

function RenderNationInfo({nation}) {
    //TODO: add openinghours and address to nation object

    return (
        <SafeAreaView>
            <View style={styles.nationInfoWrapper}>
                <View style={styles.nationNameWrapper}>
                    <Text style={styles.nationName}>{nation.nickname}</Text>
                </View>

                <View style={styles.clockSymbolWrapper}>
                    <AntDesign name="clockcircle" size={20} color="black" />
                    <Text style={styles.openinghoursTitle}>Öppettider</Text>
                </View>

                <View style={styles.openinghoursWrapper}>
                    <View style={styles.lineSymbol}></View>
                    <View style={styles.openinghoursTextWrapper}>
                        <Text style={styles.openinghoursText}>Mån-Fre: 10:00-20:00</Text>
                        <Text style={styles.openinghoursText}>Lör-Sön: Stängt</Text>
                    </View>
                </View>

                <View style={styles.mapWrapper}>
                    <View style={styles.mapSymbolWrapper}>
                        <Octicons name="location" size={20} color="black" />
                    </View>
                    <Text style={styles.mapAddress}>S:t Larsgatan 13, Uppsala, 75311</Text>
                </View>
            </View> 

            <RenderActivityBar activityComponent={RenderActivityComponent(getActivityLevel(nation))}></RenderActivityBar>

        </SafeAreaView>
    )
}

//dummy for retrieving activity level of given nation
function getActivityLevel({nation}) {
    return 'low'
}

//renders activity bar
function RenderActivityBar({activityComponent}) {
    
    return (
        <View style={styles.activitybar}>
            <View style={styles.activitybarLogo}>
                <Ionicons name="md-people-outline" size={24} color="white"/>
            </View>
            
            <Text style={styles.activitybarText}>Aktivitet</Text>

            {activityComponent}
        </View>
    )
}



//function that returns a component with a colored circle and text - determined by the activity level
function RenderActivityComponent(activityLevel) {
    switch(activityLevel) {
        case 'low':
            return (
                <View style={styles.activityLevelWrapper}>

                    <View style={styles.activityCircle} backgroundColor='green'></View>
                    <Text style={styles.activityLevelText}>Låg</Text>
                </View>)

        case 'medium':
            return (
                <View style={styles.activityLevelWrapper}>
                    <View style={styles.activityCircle} backgroundColor='yellow'></View>
                    <Text style={styles.activityLevelText}>Medel</Text>
                </View>)

        case 'high':
            return (
                <View style={styles.activityLevelWrapper}>
                    <View style={styles.activityCircle} backgroundColor='red'></View>
                    <Text style={styles.activityLevelText}>Hög</Text>
                </View>)

        default: 
            return (<View style={styles.activityLevelWrapper}>
                <View style={styles.activityCircle} backgroundColor='white'></View>
                <Text style={styles.activityLevelText}>Ej tillgänglig</Text>
            </View>)
    }
        
}




//TODO: sort styles by component!!!

const styles = StyleSheet.create({

    header : {
        alignSelf: "stretch", // 100% width
        height: 50,
        backgroundColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1
    },


    arrowBack: {
        marginLeft : 10,
        marginTop : 6,
        width : 30,
        height : 25,
    },

    logoWrapper: {
        alignSelf: 'center',
        position: 'absolute'
    },

    logo: {
        width: 65,
        height: 45,
    },
    
    nationInfoWrapper: {
        backgroundColor: '#F3F3F3',
        height: 220, //TODO: change to not fixed size
        width:'100%',
    },

    nationNameWrapper: {
        paddingTop: '4%',
        paddingLeft:'7%',
    },

    nationName: {
        fontSize: 26,
        fontWeight: 'bold',

    },

    openinghoursWrapper: {
        flexDirection: 'row',
        marginLeft: '6.5%',
        marginTop: 6,
    },

    
    clockSymbolWrapper: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: '7%',
        alignItems: 'center',
    },
    
    openinghoursTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
    },

    openinghoursTextWrapper: {
        justifyContent: 'space-evenly',
        marginLeft: 10
    },

    openinghoursText: {
        fontSize: 12,
    },

    lineSymbol: {
        marginLeft: 10,
        width: 4,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'black',
    },

    mapWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    mapSymbolWrapper: {
        marginTop: 6,
        marginLeft: '7.5%',
    },

    mapAddress: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },

    activitybar: {
        flexDirection: 'row',
        height: 45,
        width: '100%',
        backgroundColor: '#2F2F2F',
        alignSelf: 'flex-end',
        alignItems: 'center',
    },

    activitybarText: {
        color: 'white',
        fontSize: 14,
        marginLeft: '3%',

    },

    activitybarLogo: {
        marginLeft: '5%',
        marginBottom: '0.5%',
    },

    activityLevelWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        right: '5%',
    },

    activityCircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        alignSelf:'center',
    },

    activityLevelText: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
    }


})
