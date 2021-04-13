// This is for rendering the Event Timeline on the Homepage.
import "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { nationListEx } from "../../screens/NationScreen";
import { useNavigation } from "@react-navigation/core";



export default function RenderTimeline(){
    var eventList = getEventList()
    return (
        <View style={eventStyles.timelineContainer}>
            <ScrollView >
                {eventList.map((event) => (
                <RenderEvent key={event.oid} event={event}/>))}
            </ScrollView>
        </View>
    )

}

//returns temporary, sorted list of event objects
//TODO: replace with sdk function
function getEventList(){
    return (
        [{
            oid:"event_01",
            title:"Pannkaksbuffé",
            description:"Denna torsdag firar vi att det är torsdag genom att äta pannkakor i stora mängder på en torsdag. Välj mellan tunnpankakor, bananpannkakor, amerikanska pannkakor och vad än du kan drömma. Ät dig mätt för 50 kr!",
            time:"11:00 - 15:00",
            nation: nationListEx[0], //norrlands nation - object
            image: require('../../img/png/norrlands/event_pancakes.jpeg'), //event cover img
        },
        {
            oid:"event_02",
            title:"Puben",
            description: "Hos oss kan du läska dig med något drickbart, äta en bit mat och umgås med dig själv eller med andra! Faller andan på så finns det massor med brädspel du kan spela.",
            time:"17:00 - 20:00",
            nation: nationListEx[1], 
            image: require('../../img/png/norrlands/event_pancakes.jpeg')
        },

        /*{
            oid:"event_03",

        }*/
    ]
    )
}

function RenderEvent({event}){
    console.log(event)
    return(
        <View style={eventStyles.eventContainer}>

            {/*Cover Image of event*/}
            <View style={eventStyles.titleContainer}>
                <Image source={event.image} style={eventStyles.coverImg}></Image>
            </View>

            {/*Nation logo and name*/}
            <RenderNationHeader nation={event.nation}></RenderNationHeader>

            {/*Container for title and description*/}
            <View style={eventStyles.textContainer}>
                {/*Title of event*/}
                <View style={eventStyles.titleContainer}>
                    <Text style={eventStyles.title}>{event.title}</Text>
                </View>

                {/*Time of event*/}
                <View style={eventStyles.timeContainer}>
                    <Text style={eventStyles.time}>{event.time}</Text>
                </View>

                {/*Description of event*/}
                <View style={eventStyles.descriptionContainer}>
                    <Text style={eventStyles.description}>{event.description}</Text>
                </View>
            </View>
        
        </View>
    )
}

function RenderNationHeader({nation}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            style={nationStyles.container} 
            onPress={()=>navigation.push("NationContent", {nation: nation})}
        >
            <Image source={nation.logo} style={nationStyles.logo}></Image>
            <Text style={nationStyles.name}>{nation.nickname}</Text>
        </TouchableOpacity>

    )

}

const eventStyles = StyleSheet.create({
    timelineContainer:{
        marginBottom:'70%', //TODO: Fix this horrible solution please!!!!!!!!!!!!
    },

    coverImg:{
        height:200,
        width:'100%',
    },

    eventContainer:{
        width:'100%',
        flex:1,
        backgroundColor:'white',
        marginBottom:'3%',

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        
        elevation:10,
        zIndex:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3, 
    },

    textContainer:{
        width:'80%',
        alignSelf:'center',
        marginTop:'1%',
        marginBottom:'3%',

    },
    
    titleContainer:{
        
    },

    title:{
        fontSize:18,
        fontWeight:'bold',
    },

    time:{
        fontSize:16,
    },

    descriptionContainer:{
        marginTop:'1%',
        width:'100%',
    },

    description:{
        color: '#808080',
    },

})

const nationStyles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'40%',
        alignItems: 'center',
        marginLeft:'2%',
        marginTop: '2%',
    },

    logo:{
        width:30,
        height:30,
    },

    name:{
        color:'#808080',
        marginLeft:'2%',
    }
})