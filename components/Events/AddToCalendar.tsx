/**
 * @category Home
 * @module AddToCalendar
 */

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Platform,
} from 'react-native';
import * as Calendar from 'expo-calendar';

import { Event } from '@dsp-krabby/sdk'
import { RecurrenceRule, Alarm, Details } from './AddToCalendarInterface'

//TODO: extract interfaces to separate file


/**
 * Function used to export an event from the app to the native calendar on the used device
 * @param event event to be added to native calendar
 */
async function addToCalendar (event:Event) {
    const status = await getPermission()
    if (status != 'granted') {
        console.log(`Permission to use calendar: ${status}`)
        return
    }

    var details:Details = getDetails(event)
    
    const eventID = await createEvent(details)
    
    //console.log("calendar ID: " + await getCalendarID())
    //console.log("new event ID: " + eventID)
    //console.log("details of new event: " + details)

    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    console.log('Titles of existing calendars on device: ')
    calendars.map((calendar)=>console.log(calendar.title + '\n'))
}

/**
 * Function used to check/ask user for calendar permission
 * @return permission status (granted | undetermined | denied)
 */
export async function getPermission() { //add type
    const { status } = await Calendar.getCalendarPermissionsAsync()
    if (status != 'granted') {
        const { status } = await Calendar.requestCalendarPermissionsAsync()

        if (status == 'granted') {
        
        return status
        }
        else  {
            Alert.alert("Error", "Please allow Calendar permissions to import event")
        }
    }
    return status
}

const getDetails = (event:Event)=>{
    return ({
        title: event.name,
        startDate: new Date(event.occurs_at),
        endDate: new Date(event.ends_at),
        //location: useLocation(event.location_id) //incompatible type at the moment, compare types
        //notes: event.shortDescription // type not found??

        //TODO: add more to event objects
    })
}

/**
 * Function used to create event
 * @param details object containing event information
 * @return new event id
 */
async function createEvent(details:object) { // TODO: add strict type for details
    const calendarID:string|null = await createCalendar()
    
    if (calendarID == null) {
        console.log("could not find calendarID")
        return
    }

    const newEventID = await Calendar.createEventAsync(calendarID, details)
  
    return newEventID
}

/**
 * Function used to fetch/create calendar
 * @return calendar id
 */
async function createCalendar():Promise<string | null> {
    var calendarID = await getCalendarID()
    
    // if calendar is not found, create new calendar
    if (calendarID == null) {
        const defaultCalendarSource =
        Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Expo Calendar' }
        calendarID = await Calendar.createCalendarAsync({
        title: 'Nationskollen Calendar',
        color: '#71002E',
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id, // id does not exist in type? what should id be?
        source: defaultCalendarSource, // unclear why vscode complains? code does not work without these parameters declared
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
        })
    }

    calendarID == null && console.log("error: calendar not found nor created")
    return calendarID
}

async function getCalendarID():Promise<string | null> {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    for (let i in calendars) {
        if (calendars[i].title === 'Nationskollen Calendar' || calendars[i].name === 'Expo Calendar') return calendars[i].id
    }
    return null
}

async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    const defaultCalendars = calendars.filter(each => each.source.name === 'Default')
    return defaultCalendars[0].source
}

export default addToCalendar