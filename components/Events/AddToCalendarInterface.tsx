/**
 * This file provides interfaces for AddToCalendar
 * @category Home
 * @module AddToCalendarInterface
 */

interface RecurrenceRule {
    frequency: string // Calendar.Frequency.DAILY/WEEKLY/MONTHLY/YEARLY
    interval: number //if frequency is DAILY and interval is 2, event occurs every other day (defaults to 1)
    endDate: Date //when recurrence stops
    occurence:number //number of recurrences
    //other options available for iOS, see documentation of expo-calendar
}

interface Alarm {
    absoluteDate?: Date //iOS only
    relativeOffset: number //num of minutes from startDate
    method?: string //Android only
}
  
interface Details {
    title: string
    startDate: Date 
    endDate: Date
    allDay?:boolean
    location?: string
    notes?: string
    alarms?: Array<Alarm>
    recurrenceRule?: RecurrenceRule
    availability?: string
    timeZone?: string // Required on Android.
    endTimeZone?: string // Android only
    url?: string //iOS only
    organizerEmail?: string // Android only
    accessLevel?: string // Android only
    guestsCanModify?: boolean// Android only
    guestsCanInviteOthers?: boolean // Android only
    guestsCanSeeGuests?: boolean // Android only
}

export { RecurrenceRule, Alarm, Details }