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
        nationMenus: 'Menus',
        nationEvents: 'Events',
        nationLocationAndHours: 'Opening hours and locations',
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
        today: 'Today',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
    },

    openingHours: {
        openToday: 'Open today',
        closedToday: 'Closed today',
        missing: 'No opening hours',
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
            navigateTo: 'Directions',
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
            events: 'Events',
            news: 'News',
        },
    },

    events: {
        createdAt: 'Created',
        updatedAt: 'Last updated',
        failedToLoad: 'Could not load event',
        empty: 'No events',
    },

    location: {
        showOnMap: 'Show on map',
        regularOpeningHours: 'Opening hours',
        exceptionOpeningHours: 'Exceptions',
    },

    nation: {
        description: 'Description',
    },
}

export default English
