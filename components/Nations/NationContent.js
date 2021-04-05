// This is for rendering the nation content. 
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';


export default function NationContent({nation}) {


    return (
        <SafeAreaView>
            <RenderHeader logo={nation.logo}></RenderHeader>
            <RenderNationInfo nation={nation}></RenderNationInfo>
            <RenderFood nation={nation}></RenderFood>
            <RenderEvents nation={nation}></RenderEvents>
            <RenderInfo nation={nation}></RenderInfo>
            {/*<RenderEvents></RenderEvents>*/}
        </SafeAreaView>
    )
}

//renders top header to page
function RenderHeader(logo){
    //temporary hardcoded test logo
    //will be replace with input from logo prop
    let testLogo = '../../img/png/vdala/vdalalogga.png'

    return (
        <SafeAreaView style={headerStyles.header}>
            {/*left arrow for going back*/}
            <View style={headerStyles.arrowBack}>
                <Ionicons name="arrow-back" size={24} color="black" onPress={()=>Alert.alert("(back arrow) was pressed")}/>
            </View>

            {/*nation logo as header*/}
            <View style={headerStyles.logoWrapper}>
               <Image source={require(testLogo)} style={headerStyles.logo}/>
            </View>
        </SafeAreaView>
    )
}

//renders information and title of nation. Can be used in maps too!
function RenderNationInfo({nation}) {
    //TODO: add openinghours and address to nation object
    //TODO: add color theme to nation, so that icons can match

    return (
        <SafeAreaView>
            <View style={nationStyles.nationInfoWrapper}>
                <View style={nationStyles.nationNameWrapper}>
                    <Text style={nationStyles.nationName}>{nation.nickname}</Text>
                </View>

                <View style={nationStyles.clockSymbolWrapper}>
                    <AntDesign name="clockcircle" size={20} color="black" />
                    <Text style={nationStyles.openinghoursTitle}>Öppettider</Text>
                </View>

                <View style={nationStyles.openinghoursWrapper}>
                    <View style={nationStyles.lineSymbol}></View>
                    <View style={nationStyles.openinghoursTextWrapper}>
                        <Text style={nationStyles.openinghoursText}>Mån-Fre: 10:00-20:00</Text>
                        <Text style={nationStyles.openinghoursText}>Lör-Sön: Stängt</Text>
                    </View>
                </View>

                <View style={nationStyles.mapWrapper}>
                    <View style={nationStyles.mapSymbolWrapper}>
                        <MaterialIcons name="location-on" size={16} color="white" />
                    </View>
                    <View style={nationStyles.mapSymbolCircle}></View>
                    <Text style={nationStyles.mapAddress} onPress={()=>Alert.alert(
                        "Öppna i kartor?",
                        "Tryck OK för att öppna addressen i kartor",
                        [
                            {
                            text: "Avbryt",
                            onPress: () => console.log("Avbryt Pressed"),
                            style: "Avbryt"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    )}>S:t Larsgatan 13, Uppsala, 75311</Text>
                </View>
            </View> 

            <RenderActivityBar activityComponent={RenderActivityComponent(getActivityLevel(nation))}></RenderActivityBar>
        </SafeAreaView>
    )
}

//dummy for retrieving activity level of given nation
//TODO: replace with function that communicates with SDK
function getActivityLevel({nation}) {
    return 'low'
}

//renders activity bar
function RenderActivityBar({activityComponent}) {
    
    return (
        <View style={activityStyles.activitybar}>
            <View style={activityStyles.activitybarLogo}>
                <Ionicons name="md-people-outline" size={24} color="white"/>
            </View>
            
            <Text style={activityStyles.activitybarText}>Aktivitet</Text>

            {activityComponent}
        </View>
    )
}

//function that returns a component with a colored circle and text - determined by the activity level
function RenderActivityComponent(activityLevel) {
    switch(activityLevel) {
        case 'low':
            return (
                <View style={activityStyles.activityLevelWrapper}>

                    <View style={activityStyles.activityCircle} backgroundColor='green'></View>
                    <Text style={activityStyles.activityLevelText}>Låg</Text>
                </View>)

        case 'medium':
            return (
                <View style={activityStyles.activityLevelWrapper}>
                    <View style={activityStyles.activityCircle} backgroundColor='yellow'></View>
                    <Text style={activityStyles.activityLevelText}>Medel</Text>
                </View>)

        case 'high':
            return (
                <View style={activityStyles.activityLevelWrapper}>
                    <View style={activityStyles.activityCircle} backgroundColor='red'></View>
                    <Text style={activityStyles.activityLevelText}>Hög</Text>
                </View>)

        default: 
            return (<View style={activityStyles.activityLevelWrapper}>
                <View style={activityStyles.activityCircle} backgroundColor='white'></View>
                <Text style={activityStyles.activityLevelText}>Ej tillgänglig</Text>
            </View>)
    }
        
}

//renders entire dropdown menu with food content
function RenderFood({nation}) {
    //temporary variable and dummy function for food menu
    //var foodmenu = getFoodMenu(nation)
    return (
        <RenderDropDownHeader type={'food'}/>
        /*<RenderSubHeaders/>*/
    )
}

//renders entire dropdown menu with events content
function RenderEvents({nation}) {
    //temporary variable and dummy function for events menu
    //var eventsmenu = getEventsMenu(nation)
    return (
        <RenderDropDownHeader type={'events'}/>
        /*<RenderSubHeaders/>*/
    )
}

//renders entire dropdown menu with info (about nation) content
function RenderInfo({nation}) {
    //temporary variable and dummy function for events menu
    //var eventsmenu = getEventsMenu(nation)
    return (
        <RenderDropDownHeader type={'info'}/>
        /*render subheaders when plus icon is pressed*/
    )
}

//renders header for arbitrary "types" of headers
function RenderDropDownHeader({type}){
    var icon    //variable holding icon, determined by type
    var title   //variable holding title, determined by type

    switch(type){
        case 'food':
            icon  = <Ionicons name= "md-fast-food-outline" size={28} color="black" />
            title = "Meny"
            break
        case 'events':
            icon  = <MaterialIcons name="event" size={24} color="black" />
            title = "Evenemang"
            break
        case 'info':
            icon  = <Foundation name="info" size={24} color="black" />
            title = "Landskap"
            break
        default:
            icon = <View></View>
            title = ""
            console.log("error: type of dropdown header not found")
    }

    return (
        <View style={dropdownStyles.header}>
            <View style={dropdownStyles.iconWrapper}>{icon}</View>
            
            <Text style={dropdownStyles.headerTitle}>{title}</Text>

            <View style={dropdownStyles.headerPlusWrapper}>
                <AntDesign name="pluscircle" size={32} color="#AEAEAE" 
                    onPress={()=>
                        Alert.alert(title+" menu should expand now")
                    }/>
                
                {/*// minus circle should replace plus circle when plus is pressed.
                <AntDesign name="minuscircle" size={32} color="#AEAEAE" 
                    onPress={()=>
                        Alert.alert(title+" menu should close now")
                    }
                />*/}
            </View>
        </View>
    )
}

//styles for header
const headerStyles = StyleSheet.create({
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
})

//styles for nation info
const nationStyles = StyleSheet.create({
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
        marginTop: 15,
    },

    mapSymbolWrapper: {
        position: 'absolute',
        marginLeft: '7.5%',

        zIndex: 2,
        elevation: Platform.OS === 'android' ? 2: 0,
    },

    mapSymbolCircle: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'black',
        position: 'absolute',
        left: '7%',

        zIndex: 1,
        elevation: Platform.OS === 'android' ? 1: 0,
    },

    mapAddress: {
        marginLeft: '14%',
        fontSize: 14,
        fontWeight: 'bold',
        zIndex: 3,
    },


})

//styles for activitybar
const activityStyles = StyleSheet.create({
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

//styles for dropDown menus
const dropdownStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        alignItems: 'center',
    },

    iconWrapper: {
        marginLeft:20,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft:60,
    },

    headerPlusWrapper: {
        position: 'absolute',
        right: 30,
    },


})

//styles for event menu

//styles for food menu