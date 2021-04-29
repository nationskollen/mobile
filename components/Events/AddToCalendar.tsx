/**
 * @category Home
 * @module AddToCalendar
 */
import { Alert, Platform } from 'react-native'
import * as Calendar from 'expo-calendar'

import { Event } from '@dsp-krabby/sdk'
import { Details } from './AddToCalendarInterface'

const CalendarTitle = 'Nationskollen Calendar'

/**
 * Function used to export an event from the app to the native calendar on the used device
 * @param event event to be added to native calendar
 * @param eventAddress address of event
 */
async function addToCalendar(event: Event, eventAddress: string, nationName: string) {
    const status = await getPermission()
    if (status != 'granted') {
        console.log(`Permission to use calendar: ${status}`)
        return
    }

    //get details object for event
    var details: Details = getDetails(event, eventAddress, nationName)
    const eventID = await createEvent(details)

    //tell user event is added to their calendar
    eventID != null && Alert.alert('Event successfully added to your calendar')

    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    console.log('Titles of existing calendars on device: ')
    calendars.map((calendar) => console.log(calendar.title + '\n'))
}

/**
 * Function used to check/ask user for calendar permission
 * @return permission status (granted | undetermined | denied)
 */
export async function getPermission(): Promise<string> {
    //add type
    const { status } = await Calendar.getCalendarPermissionsAsync()
    if (status != 'granted') {
        const { status } = await Calendar.requestCalendarPermissionsAsync()
        status == 'denied' &&
            Alert.alert('Error', 'Please allow Calendar permissions to import event')
    }

    return status
}

const getDetails = (event: Event, eventAddress: string, nationName: string): Details => {
    return {
        title: nationName + ': ' + event.name,
        startDate: new Date(event.occurs_at),
        endDate: new Date(event.ends_at),
        notes: event.short_description,
        location: eventAddress,

        //TODO: add more props
    }
}

/**
 * Function used to create event
 * @param details object containing event information
 * @return new event id
 */
async function createEvent(details: Details): Promise<string> {
    // TODO: add strict type for details
    const calendarID: string | null = await createCalendar()

    if (calendarID == null) {
        console.log('Could not find calendarID')
        return
    }

    const newEventID = await Calendar.createEventAsync(calendarID, details)

    newEventID == null && console.log('could not create new event (eventID == null')

    const newEvent = await Calendar.getEventAsync(newEventID)
    console.log('newly created event info: ' + newEvent.title)

    return newEventID
}

/**
 * Function used to fetch/create calendar
 * @return calendar id
 */
async function createCalendar(): Promise<string | null> {
    var calendarID = await getCalendarID()

    // if calendar is not found, create new calendar
    if (calendarID == null) {
        const defaultCalendarSource =
            Platform.OS === 'ios'
                ? await getDefaultCalendarSource()
                : {
                      isLocalAccount: true,
                      name: 'Expo Calendar',
                      type: Calendar.SourceType.SUBSCRIBED,
                  } //Subscribed or Local calendar type?
        calendarID = await Calendar.createCalendarAsync({
            title: CalendarTitle,
            color: '#71002E',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        })
    }

    calendarID == null && console.log('error: calendar not found nor created')
    return calendarID
}

async function getCalendarID(): Promise<string | null> {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    for (let i in calendars) {
        if (
            calendars[i].title === CalendarTitle ||
            calendars[i].name === 'Expo Calendar' //TODO: find better name
        )
            return calendars[i].id
    }
    return null
}

async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    const defaultCalendars = calendars.filter((each) => each.source.name === 'Default')
    return defaultCalendars[0].source
}

export default addToCalendar
