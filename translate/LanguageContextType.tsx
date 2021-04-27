export default interface LanguageContextType {
    general: {
        ok: string
        cancel: string
    }

    footer: {
        notifications: string
        nations: string
        home: string
        map: string
        settings: string
    }

    notifications: {
        header: string
    }

    nations: {
        header: string
        menu: string
        events: string
        activitylevel: {
            header: string
            low: string
            medium: string
            high: string
            closed: string
        }
        alerts: {
            mapTitle: string
            mapDescription: string
        }
    }

    home: {
        header: string
        headline: string
        nationbutton: string
        reminderbutton: string
        todaysEvents: string
    }

    map: {
        header: string
        popup: {
            openingtimes: string
            montofri: string
            sattosun: string
            shownation: string
            closed: string
            alerts: {
                openinmaps: string
                presstoopen: string
                decline: string
                accept: string
            }
        }
        marker: {
            activitylevel: {
                header: string
                low: string
                medium: string
                high: string
                closed: string
            }
        }
    }
    settings: {
        header: string
        darkmodeheader: string
        darkmodedescription: string
        login: string
        notifications: string
        language: string
        loginsetting: {
            header: string
            username: string
            password: string
            loginbutton: string
        }

        notificationsetting: {
            header: string
        }
    }
}
