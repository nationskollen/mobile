// This is for rendering the home page.
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Alert, SafeAreaView, Platform} from 'react-native';
import NK_LOGO from '../../assets/nationskollen_logo-do_not_change.png'
import {RenderDropDownHeader} from '../Nations/NationContent'

//should "todays date" and "chosen date" be global in this file perhaps?

export default function HomePage () {
    return (
        <View>
            <Header></Header>
            <FilterBar></FilterBar>
            {/*date should be fetched and sent to RenderAllEvents*/}
            <RenderAllEvents date={""}></RenderAllEvents>
        </View>
    )
}

const Header = () => {

    return (
        <View style={headerStyles.headerWrapper}>
            <Text style={headerStyles.headerTitle}>Händelser</Text>
            {/*THE PRETTIEST LOGO YOU WILL EVER SEE*/}
            <Image source={NK_LOGO} style={headerStyles.logo}/>
        </View>
    )
}

const FilterBar = () => {
    return (
        <View style={filterStyles.mainWrapper}>
            <ChooseDateBar></ChooseDateBar>
            <ChooseNationButton></ChooseNationButton>
        </View>
    )
}


const ChooseDateBar = () => {
    //TODO: change to dynamic date
    let date = 'Idag'

    return (
        <View style={filterStyles.dateBar}>
            <TouchableOpacity onPress={()=>handlePreviousDate()}>
                <View style={filterStyles.leftArrowWrapper}>
                    <AntDesign name={'left'} size={20} color="black" />
                </View>
            </TouchableOpacity>
            
            <View style={filterStyles.dateTextWrapper}>
                <Text style={filterStyles.dateText}>{date}</Text>
            </View>

            <TouchableOpacity onPress={()=>handleNextDate()}>
                <View style={filterStyles.rightArrowWrapper}>
                    <AntDesign name={'right'} size={20} color="black" />
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

function handlePreviousDate() {
    console.log('left arrow pressed')
}
function handleNextDate() {
    console.log('right arrow pressed')
}

//renders button that should sho choose-nation content when pressed
const ChooseNationButton = () => {
    return (
        <TouchableOpacity onPress={()=>handleNationButtonPress()}>
            <View style={filterStyles.nationButton}>
                <Text style={filterStyles.nationButtonText}>Nation</Text>
                <AntDesign name="down" size={20} color="white" />
            </View>
        </TouchableOpacity>
    )
}

function handleNationButtonPress() {
    console.log('nation button pressed - show choose nation content')
}

//utilizes event component imported from nation content
function RenderAllEvents({date}) {
    //var eventList = getEvents(date)
    //temporary list of events
    var eventList = [
        {
            title:'Pannkakstorsdag',
            type :'food'
        },
        {
            title:'Gratis-Covid Rave',
            type :'event'
        },
        {
            title:'Lunchbuffé',
            type :'food'
        },
    ]
    //variable holding list of components for events
    var renderedEventList = []

    //render components for events and push to list
    for (let i in eventList) {
        renderedEventList.push(
            <View>
                <RenderDropDownHeader title={eventList[i].title} type={eventList[i].type}></RenderDropDownHeader>
            </View>
        )
    }

    return (
        renderedEventList
    )
}

const headerStyles = StyleSheet.create({
    headerWrapper: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        marginLeft: 15,
        width: '15%',
        height: '70%',
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: '7%',
    }
})

const filterStyles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#AEAEAE',
    },

    dateBar: {
        width: 250,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '5%',
        borderWidth: 1,
        flexDirection: 'row',
    },

    leftArrowWrapper: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
    },

    dateTextWrapper: {
        width: 150,
        height: '100%',
        alignItems:'center',
        justifyContent: 'center',
    },

    dateText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    rightArrowWrapper: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
    },

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
    }






})