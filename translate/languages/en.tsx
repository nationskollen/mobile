import LanguageContextType from '../LanguageContextType'

const English: LanguageContextType = {
    general: {
        ok: 'OK',
        cancel: 'Cancel',
        loading: 'Loading',
    },

    titles: {
        home: 'Home',
        notifications: 'Notifications',
        map: 'Map',
        settings: 'Settings',
        nation: 'Nation',
        nations: 'Choose nation',
        nationHours: 'Opening hours',
        nationMenus: 'Menus',
        nationEvents: 'Events',
        nationLocations: 'Locations',
        events: 'Events',
        event: 'Event',
        login: 'Login',
        customizeNotificaitions: 'Customize notifications',
        language: 'Choose language',
    },

    activityLevels: {
        header: 'Activity level',
        closed: 'Closed',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        veryHigh: 'Very high',
        max: 'Max',
    },

    alerts: {
        showOnMapTitle: 'Open in maps?',
        showOnMapDescription: 'Click Ok to open the address in maps',
    },

    days: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
    },

    home: {
        headline: 'Nationskollen',
        nationbutton: 'Nation',
        reminderbutton: 'Remind me',
        todaysEvents: "Today's events",
    },

    map: {
        currentActivityLevel: 'Activity level',
        popup: {
            shownation: 'View nation',
            closed: 'Closed',
        },
    },

    settings: {
        darkmodeheader: 'Dark Mode',
        darkmodedescription: 'Set this to prevent strained eyes',
        login: 'Login',
        notifications: 'Adjust notifications',
        language: 'Choose language',
        loginsetting: {
            header: 'Nationskollen',
            username: 'Username',
            password: 'Password',
            loginbutton: 'Login',
        },

        notificationsetting: {
            header: 'Adjust notifications',
        },
    },

    events: {
        createdAt: 'Created',
        updatedAt: 'Last updated',
        failedToLoad: 'Could not load event',
    },
}

export default English
