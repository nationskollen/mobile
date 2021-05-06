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
        nations: 'Nations',
        chooseNation: 'Choose nation',
        nationMenus: 'Menus',
        nationEvents: 'Events',
        nationLocationAndHours: 'Opening hours and locations',
        events: 'Events',
        event: 'Event',
        login: 'Login',
        customizeNotificaitions: 'Customize notifications',
        language: 'Choose language',
        aboutUs: 'About Nationskollen',
    },

    activityLevels: {
        header: 'Activity level',
        0: 'Closed',
        1: 'Low',
        2: 'Medium',
        3: 'High',
        4: 'Very high',
        5: 'Max',
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

    event: {
        location: 'Location',
        description: 'Description',
    },

    location: {
        showOnMap: 'Show on map',
        regularOpeningHours: 'Opening hours',
        exceptionOpeningHours: 'Exceptions',
    },

    nation: {
        description: 'Description',
        contactInformation: 'Contact information',
        people: 'People',
    },

    menus: {
        empty: 'No available menus',
    },

    menu: {
        empty: 'Menu is empty',
        noResults: 'No matching results',
        searchPlaceholder: 'Search in menu',
    },

    aboutUs: {
        whatIsNationskollen: 'What is Nationskollen?',
        contactInformation: 'Contact information',
        whoAreWe: 'Who are we?',
        telephone: 'Telephone',
        email: 'Email',
    },

    calendar: {
        chooseDate: 'Pick a date',
        confirm: 'Confirm',
        cancel: 'Cancel',
    },
}

export default English
