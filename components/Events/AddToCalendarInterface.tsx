/**
 * This file provides interfaces for AddToCalendar
 * @category Home
 * @module AddToCalendarInterface
 */
import * as Calendar from 'expo-calendar'

/**
 * Provides prop types for details for creating a new event.
 * @interface
 */
interface Details {
    title: string
    startDate: Date
    endDate: Date
    allDay?: boolean
    location?: string
    notes?: string
    alarms?: Array<Calendar.Alarm>
    recurrenceRule?: Calendar.RecurrenceRule
    availability?: string
    timeZone?: string // Required on Android.
    endTimeZone?: string // Android only
    url?: string //iOS only
    organizerEmail?: string // Android only
    accessLevel?: string // Android only
    guestsCanModify?: boolean // Android only
    guestsCanInviteOthers?: boolean // Android only
    guestsCanSeeGuests?: boolean // Android only
}

export { Details }
