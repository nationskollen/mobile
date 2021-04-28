import LanguageContextType from '../LanguageContextType'

const English: LanguageContextType = {
    general: {
        ok: 'OK',
        cancel: 'Cancel',
        loading: 'Loading',
    },

    footer: {
        notifications: 'Notifications',
        nations: 'Nations',
        home: 'Home',
        map: 'Map',
        settings: 'Settings',
    },

    notifications: {
        header: 'Notifications',
    },

    nations: {
        header: 'Nations',
        menu: 'Menu',
        events: 'Events',
        activitylevel: {
            header: 'Activity level',
            closed: 'Closed',
            low: 'Low',
            medium: 'Medium',
            high: 'High',
        },
        alerts: {
            mapTitle: 'Open in maps?',
            mapDescription: 'Click Ok to open the address in maps',
        },
    },

    home: {
        header: 'Home',
        headline: 'Nationskollen',
        nationbutton: 'Nation',
        reminderbutton: 'Remind me',
        todaysEvents: "Today's events",
    },

    map: {
        header: 'Map',
        popup: {
            openingtimes: 'Opening hours',
            montofri: 'Mon-Fri ',
            sattosun: 'Sat-Sun ',
            shownation: 'View nation',
            closed: 'Closed',
            alerts: {
                openinmaps: 'Open in maps?',
                presstoopen: 'Press OK to open in maps',
                decline: 'Decline',
                accept: 'Ok',
            },
        },
        marker: {
            activitylevel: {
                header: 'Activity level',
                low: 'Low',
                medium: 'Medium',
                high: 'High',
                closed: 'Closed',
            },
        },
    },

    settings: {
        header: 'Settings',
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
